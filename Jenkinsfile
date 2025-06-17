pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = 'simplebookstore'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Start Services') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Smoke Test Backend') {
            steps {
                script {
                    // adjust the port below if needed (default: 5000)
                    sh 'curl -s http://localhost:5000 || echo "Backend not reachable!"'
                }
            }
        }

        stage('Smoke Test Frontend') {
            steps {
                script {
                    // adjust the port below if needed (default: 3000)
                    sh 'curl -s http://localhost:3000 || echo "Frontend not reachable!"'
                }
            }
        }

        stage('Stop Services') {
            steps {
                script {
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
