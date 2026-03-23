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

       

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'ssh-private-key', variable: 'SSH_KEY'), 
                                 usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCK_PASS', usernameVariable: 'DOCK_USER')]) {
                    powershell """
                        # 1. Giải mã key chuẩn xác bằng Byte (Tránh lỗi libcrypto)
                        \$keyBytes = [System.Convert]::FromBase64String("${env.SSH_KEY}")
                        [System.IO.File]::WriteAllBytes("\${env:WORKSPACE}\\ssh_key_temp", \$keyBytes)
                        
                        \$tag = if ("${env.BRANCH_NAME}") { "${env.BRANCH_NAME}" } else { "${env.GIT_BRANCH}".Split('/')[-1] }

                        # 2. Deploy qua Docker Alpine (Dùng cách truyền file an toàn nhất)
                        docker run --rm `
                            -v "\${env:WORKSPACE}:/certs:ro" `
                            alpine:latest `
                            sh -c "apk add --no-cache openssh-client && \
                                   cp /certs/ssh_key_temp /tmp/id_rsa && \
                                   chmod 600 /tmp/id_rsa && \
                                   ssh -i /tmp/id_rsa -o StrictHostKeyChecking=no ${env.SSH_USER}@${env.SSH_HOST} 'docker login -u ${DOCK_USER} -p ${DOCK_PASS} && \
                                   cd ${env.WORK_DIR} && \
                                   set IMAGE_TAG=\$tag && \
                                   docker-compose -f ${env.COMPOSE_FILE} pull ops-docs && \
                                   docker-compose -f ${env.COMPOSE_FILE} up -d --remove-orphans ops-docs'"
                        
                        Remove-Item "ssh_key_temp" -Force
                    """
                }
            }
        }
    }

    post {
        success { echo "Success! Docusaurus is LIVE." }
        failure { echo "Failed. Check SSH Key or Network." }
    }
}