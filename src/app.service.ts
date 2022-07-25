import { Body, Injectable } from '@nestjs/common';
import { Reminder } from './models';
import * as fs from 'fs';

@Injectable()
export class AppService {
  
  listReminders(): any{
    let id: number = 1;
    let reminders =[];

    while (fs.existsSync(`src/reminders/reminders_${id}`)) {
      reminders.push(JSON.parse(fs.readFileSync(`src/reminders/reminders_${id}`, 'utf-8')))
      id++;
    }
    return reminders;
    
  }

  createReminder(@Body() reminder: Reminder): any {
    fs.writeFileSync(`src/reminders/reminders_${reminder.id}`, JSON.stringify(reminder));
    return reminder;
  } 
    
  updateReminder(@Body() reminderUpdate: Reminder): any {
    let reminder: Reminder 
    reminder = JSON.parse(fs.readFileSync(`src/reminders/reminders_${reminderUpdate.id}`, 'utf-8'))
    reminder.title = reminderUpdate.title;
    reminder.description = reminderUpdate.description;
    reminder.status = reminderUpdate.status;
    fs.writeFileSync(`src/reminders/reminders_${reminder.id}`, JSON.stringify(reminder))
    return reminder;
  }
  }


