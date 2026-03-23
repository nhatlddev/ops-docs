pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "123456nhat/ops-docs" 
        COMPOSE_FILE = "docker-compose-docs.yml"
        SSH_HOST = "172.16.1.122"
        SSH_USER = "Admin"
        WORK_DIR = "C:\\project"
        PROJECT_NAME = "ops-docs" 
    }

    tools {
        nodejs 'node22' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCK_PASS', usernameVariable: 'DOCK_USER')]) {
                    powershell """
                        docker login -u "${DOCK_USER}" -p "${DOCK_PASS}"

                        npm install --frozen-lockfile
                        \$env:NODE_OPTIONS="--max-old-space-size=4096"
                        npm run build

                        \$rawBranch = "${env.GIT_BRANCH}"
                        if (\$rawBranch -match "/") { \$tag = \$rawBranch.Substring(\$rawBranch.LastIndexOf("/") + 1) }
                        else { \$tag = \$rawBranch }
                        if (\$null -eq \$tag -or \$tag -eq "") { \$tag = "latest" }

                        Write-Host "Tag xac dinh duoc: \$tag"
                        docker build -t "${env.DOCKER_IMAGE}:\$tag" .
                        docker push "${env.DOCKER_IMAGE}:\$tag"
                        
                        docker logout
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'ssh-private-key', variable: 'SSH_KEY'), 
                                 usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCK_PASS', usernameVariable: 'DOCK_USER')]) {
                    powershell """
                        \$keyBytes = [System.Convert]::FromBase64String("${env.SSH_KEY}")
                        [System.IO.File]::WriteAllBytes("\${env:WORKSPACE}\\ssh_key_temp", \$keyBytes)
                        
                        \$tag = if ("${env.BRANCH_NAME}") { "${env.BRANCH_NAME}" } else { "${env.GIT_BRANCH}".Split('/')[-1] }

                        docker run --rm `
                            -v "\${env:WORKSPACE}:/certs:ro" `
                            alpine:latest `
                            sh -c "apk add --no-cache openssh-client && \
                                   cp /certs/ssh_key_temp /tmp/id_rsa && \
                                   chmod 600 /tmp/id_rsa && \
                                   ssh -i /tmp/id_rsa -o StrictHostKeyChecking=no ${env.SSH_USER}@${env.SSH_HOST} 'docker login -u ${DOCK_USER} -p ${DOCK_PASS} && \
                                   cd ${env.WORK_DIR} && \
                                   set IMAGE_TAG=\$tag && \
                                   docker-compose -p ${env.PROJECT_NAME} -f ${env.COMPOSE_FILE} pull ops-docs && \
                                   docker-compose -p ${env.PROJECT_NAME} -f ${env.COMPOSE_FILE} up -d --remove-orphans ops-docs'"
                        
                        Remove-Item "ssh_key_temp" -Force
                    """
                }
            }
        }
    }

    post {
        success { echo "Success! Docusaurus is LIVE and isolated." }
        failure { echo "Failed. Check logs." }
    }
}