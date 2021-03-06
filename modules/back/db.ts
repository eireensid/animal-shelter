import admin from 'firebase-admin'
const replaceAll = require('string.prototype.replaceall')

let fKey = process.env.firebase_private_key
fKey = replaceAll(fKey, '\\n', '\n')

const serviceAccount: any = {
  type: process.env.firebase_type,
  project_id: process.env.firebase_project_id,
  private_key_id: process.env.firebase_private_key_id,
  private_key: fKey,
  client_email: process.env.firebase_client_email,
  client_id: process.env.firebase_client_id,
  auth_uri: process.env.firebase_auth_uri,
  token_uri: process.env.firebase_token_uri,
  auth_provider_x509_cert_url: process.env.firebase_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.firebase_client_x509_cert_url
}

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.firebase_bucket_url
  })
} catch (_) {
  console.error('firebase initializeApp n times')
}

export default admin
