node {

    stage('Slack started') {
    slackSend channel: "#northcoders-java", message: "TvsApp frontend started building"
   }

   stage('Preparation') {
      git 'https://github.com/jonsey247/React-FrontEnd-with-Java.git'
   }
  
   stage('Docker Build') {
       sh "docker build -t frontend ."
   }

   stage('Stop app') {
       sh "docker stop frontend || true"
       sh "docker rm frontend || true"
   }

   stage('Deploy') {
       sh "docker run -d --name frontend -p 80:9090 frontend"
   }
}