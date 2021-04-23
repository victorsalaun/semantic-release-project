@Library(['semantic-release']) _

pipeline {
    agent {
        kubernetes {
            label "sr"
        }
    }
    stages {
        stage('sr') {
            steps {
                semanticRelease()
            }
        }
    }
}