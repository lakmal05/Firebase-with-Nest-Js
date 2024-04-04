import { Injectable } from '@nestjs/common';
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import * as admin from 'firebase-admin';
import { firebaseConfig } from './firebaseConfig';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });
    console.log('Firebase app initialized successfully.');
  }

  async sendNotification() {
    console.log('called');

    const message = {
      notification: {
        title: 'Crave More, Pay Less! 50% Discount',
        body: 'This is a test notification.',
      },
      token:
        'fkHqxKNcRweN2v0JGf4XDs:APA91bGo_wITLLBKCUUpUdPrG6GHJrNFApdp_MEWzzm5FG_H9IbIHrfChz5CkXuO8lC2jLd0p5sP9x6q4aU9PmS8YnmKbBDgCZEzjmZGBMTrI8dJIolA8-Zcj8x0ZkS2N_2Oxml2ZVXa',
    };
    const response = await admin.messaging().send(message);
    console.log(response, 'response');
  }
}
