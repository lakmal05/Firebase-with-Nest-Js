// firebase-config.ts
import { ServiceAccount } from 'firebase-admin';

export const firebaseConfig = {
  type: 'service_account',
  project_id: 'falmo-c0d85',
  private_key_id: '933df98cd9314f1def94f90d9cc3068b02d71c30',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCiAfC/694T16Oc\n3s1YsEBCyMrW72+oKxhml94FfT3fK2gYJXxBfM9Bqng57f7XqsUXxm+IlbMwzHAp\n+LDyN61mgjhhv1L2nZziRppFJsy7/As7hn4bECX6JWwjEyfZdy4QfM/AmL5l+O1O\n/SrucTxB4piK9FMzqZ3N6n8U1ZIaEET7cMtR+Xj6d7S3K1NwbGK9XMn75d+fys51\nbx8z30VVrs9rlezgEYNln5u5AE2c4fJd+vX8Thv/MhexxUOt5S5ukLJFxwFsbqxx\naFTBBYC+Qm55e/aqdCo995e6UJumZaORKsZTfD2iKH8e7/yw/j2x2iwXyzVVcWYR\nluw3eR1JAgMBAAECggEAM6+Ty98n1EPFTpxkfgmJDuV5lTYBdPD+0WhdLHom/aaf\nCKkY6dm0U7pbrfuohMzWIX4tAjHkX8qxdCqD5VrvBte/viuof8aMEUK+IBa/VbAV\nM1H2tJKj0xkSVWRcn8welaMEMuloQSc4Kq2pfzYAJ/LvgNFvI/nWvyWzkoWKnaaW\nF6YPw6S9oyQB9UftUUZvesyg0EKJTDOq+rhSuyMwNIZFg4fls9XpZHjzPwf49Rc2\nhNOfLsGX+LCxnz6a+c6zgShJ/HBC2pRbHxeYVo/csjBQAy2dHSazDY9MaasavIMT\nu7C1hXs6y7IGEdCtk7tUsmaTgaDGsAjY9s1Pa2lo+wKBgQDT1TCDufMgG1ySAwZG\nxsRyPhC5GPa77JqXpcO07swINXvvUR79WWKwBtgi9ubddeMFO+t0XzbzgQ/iFk0t\nzUmaxhrfwWTXm4hfQIP6pt3aFE4fEqU5AWRX9UZN+m5XBgJFBsCuYrDc88gP07tv\nXbjb4CH//b+mC/XeopGK14d5RwKBgQDDyUaWF7WexE8BXDeUTB3ApUBtRHn1j/N2\n0sN5joVN3dmIILdV1rm7bDf9Yi9H/edIOgOOZD0vSNizJNxBb5OiAnFQmerU2hko\n8Ao5FCJ03Iuz3Mai++ZRh+Wf6OTzXOJVsoahm5rez9Q7zFgPem2K7/ChMv0NlAp2\npUOQZPv87wKBgQDOGu6SLBmPErA17LVtpbW7hgHVZqGiZOphREqvv2xLTGaiieZC\nEHdB19bx5hLoROw2yn8kAgRAVkGy84nyV3wXGEtLjCpm0ZCVRPtkpHjU187O0uBp\nH56XKjFWa6RyDYmlyZUt1x5ITPVJ2PPUvna/kErkfOq8T4TRMpGzalMIvwKBgQCh\nvFUmSoHLnUnSytZTGKn/acQWP9osJHWwdB3s/fJbR+iazsQFEjQugxChrgl3BGWa\nQeqMJ3xv4lK5crrNB5pC3Je1SOE4Ys8kBV+8lUh9l2+E7t3c6BD0yznC5wazj8id\nmLQlLsE6TR97IqygZLe3bc0vrUpkfCZEqvNshi+wWwKBgEh8bsWO2mIUjpAiN8cc\nvcNV2O4HC2kOaZe/Jpj2T6trczJLyM8rAseZLep1p+aGSeJn/FalFTJH581Z+z+B\nxIcJSLVqIC1sw6aTn7Sds0RYjGfAxRMFkffeYvDnwc7EdhUzk0POkPMsRkdj7ju+\n+VUFnbCaLtJlf6taJSQjFF95\n-----END PRIVATE KEY-----\n',
  clientEmail: 'firebase-adminsdk-epvtm@falmo-c0d85.iam.gserviceaccount.com',
  // client_email: 'firebase-adminsdk-epvtm@falmo-c0d85.iam.gserviceaccount.com',
  client_id: '108133815574700411416',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-epvtm%40falmo-c0d85.iam.gserviceaccount.com',
  // authDomain: 'googleapis.com', // Assuming authDomain was meant for universe_domain
  universe_domain: 'googleapis.com',
};
