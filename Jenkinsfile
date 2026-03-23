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
                        \$rawBranch = "${env.GIT_BRANCH}"
                        if (\$rawBranch -match "/") { \$tag = \$rawBranch.Substring(\$rawBranch.LastIndexOf("/") + 1) }
                        else { \$tag = \$rawBranch }
                        if (\$null -eq \$tag -or \$tag -eq "") { \$tag = "latest" }

                        docker run --rm -e RAW_KEY="${env.SSH_KEY}" alpine:latest sh -c "
                            apk add --no-cache openssh-client &&
                            echo \\\$RAW_KEY | base64 -d > /tmp/ssh_key &&
                            chmod 600 /tmp/ssh_key &&
                            ssh -i /tmp/ssh_key -o StrictHostKeyChecking=no ${env.SSH_USER}@${env.SSH_HOST} 'docker login -u ${DOCK_USER} -p ${DOCK_PASS} && cd ${env.WORK_DIR} && set IMAGE_TAG=\$tag && docker-compose -f ${env.COMPOSE_FILE} pull ops-docs && docker-compose -f ${env.COMPOSE_FILE} up -d --remove-orphans ops-docs'
                        "
                    """
                }
            }
        }
    }

    post {
        success { echo "Success: Docusaurus has been deployed to 172.16.1.122" }
        failure { echo "Failed: Please check the console log." }
    }
}