node {

    stage('Slack started') {
    slackSend channel: "#northcoders-java", message: "TvsApp frontend started building"
   }

   stage('Preparation') {
      git 'https://github.com/jonsey247/React-FrontEnd-with-Java.git'
   }
  
   stage('Build') {
       sh "npm install  "
   }

   stage('Docker Deploy') {
       sh "npm run dev"
   }
}