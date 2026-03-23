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

                        \$TAG = if ("${env.BRANCH_NAME}") { "${env.BRANCH_NAME}" } else { if ("${env.GIT_BRANCH}") { "${env.GIT_BRANCH}".Split('/')[-1] } else { "latest" } }
                        
                        docker build -t "${env.DOCKER_IMAGE}:\$TAG" .
                        docker push "${env.DOCKER_IMAGE}:\$TAG"
                        
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
                        
                        \$TAG = if ("${env.BRANCH_NAME}") { "${env.BRANCH_NAME}" } else { if ("${env.GIT_BRANCH}") { "${env.GIT_BRANCH}".Split('/')[-1] } else { "latest" } }

                        docker run --rm `
                            -v "\${env:WORKSPACE}/\$keyFile:/ssh_key" `
                            alpine:latest `
                            sh -c "apk add --no-cache openssh-client && \
                                   chmod 600 /ssh_key && \
                                   mkdir -p ~/.ssh && \
                                   ssh-keyscan -H ${env.SSH_HOST} >> ~/.ssh/known_hosts && \
                                   ssh -i /ssh_key ${env.SSH_USER}@${env.SSH_HOST} 'docker login -u ${DOCK_USER} -p ${DOCK_PASS} && \
                                   cd ${env.WORK_DIR} && \
                                   export IMAGE_TAG=\$TAG && \
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