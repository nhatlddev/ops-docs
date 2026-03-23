pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "123456nhat/ops-docs" 
        COMPOSE_FILE = "docker-compose-docs.yml"
        SSH_HOST = "172.16.1.122"
        SSH_USER = "Admin"
        WORK_DIR = "C:\\project"
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
                        \$keyFile = "ssh_key_temp"
                        [System.IO.File]::WriteAllText(\$keyFile, [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("${env.SSH_KEY}")))
                        
                        \$rawBranch = "${env.GIT_BRANCH}"
                        if (\$rawBranch -match "/") { \$tag = \$rawBranch.Substring(\$rawBranch.LastIndexOf("/") + 1) }
                        else { \$tag = \$rawBranch }
                        if (\$null -eq \$tag -or \$tag -eq "") { \$tag = "latest" }

                        \$localPath = (Get-Location).Path + "/\$keyFile"
                        \$containerPath = "/ssh_key"
                        \$volumeBind = "\${localPath}:\${containerPath}"

                        docker run --rm `
                            -v "\$volumeBind" `
                            alpine:latest `
                            sh -c "apk add --no-cache openssh-client && \
                                   cp /tmp/ssh_key_mount /tmp/ssh_key && \
                                   chmod 600 /tmp/ssh_key && \
                                   mkdir -p ~/.ssh && \
                                   ssh-keyscan -H ${env.SSH_HOST} >> ~/.ssh/known_hosts && \
                                   ssh -i /tmp/ssh_key -o StrictHostKeyChecking=no ${env.SSH_USER}@${env.SSH_HOST} 'docker login -u ${DOCK_USER} -p ${DOCK_PASS} && \
                                   cd ${env.WORK_DIR} && \
                                   set IMAGE_TAG=\$tag && \
                                   docker-compose -f ${env.COMPOSE_FILE} pull ops-docs && \
                                   docker-compose -f ${env.COMPOSE_FILE} up -d --remove-orphans ops-docs'"
                        
                        Remove-Item \$keyFile -Force
                    """
                }
            }
        }
    }

    post {
        success { echo "Success" }
        failure { echo "Failed" }
    }
}