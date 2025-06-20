pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Jenkins credentials ID
        BOOK_IMAGE = 'codenameab/bookservice'
        ORDER_IMAGE = 'codenameab/orderservice'
        FRONTEND_IMAGE = 'codenameab/simplebookstore'
    }

    stages {
        stage('Build Docker Images') {
            steps {
                bat 'docker build -t %BOOK_IMAGE% backend/bookservice'
                bat 'docker build -t %ORDER_IMAGE% backend/orderservice'
                bat 'docker build -t %FRONTEND_IMAGE% frontend'
            }
        }

        stage('Login to DockerHub') {
            steps {
                bat 'echo %DOCKERHUB_CREDENTIALS_PSW% | docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin'
            }
        }

        stage('Push Docker Images') {
            steps {
                bat 'docker push %BOOK_IMAGE%'
                bat 'docker push %ORDER_IMAGE%'
                bat 'docker push %FRONTEND_IMAGE%'
            }
        }
    }

    post {
        success {
            echo '✅ All Docker images built and pushed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs for details.'
        }
    }
}
