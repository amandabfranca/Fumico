import { Body, Controller, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { fstat } from 'fs';
import { AppService } from './app.service';
import { Reminder } from './models';
import * as fs from 'fs';
import * as path from 'path';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private authService: AuthService,
    private appService: AppService) {}

  
 @Get('listReminders')
 listReminders(): any {
    return  this.appService.listReminders();
 } 

 @Post('createReminder')
  createReminder(@Body() reminder: Reminder): any {
    return  this.appService.createReminder(reminder);
    
    //return  this.appService.createReminders()
 }

 @Put('updateReminder')
 updateReminder(@Body() reminderUpdate: Reminder): any {
   return  this.appService.updateReminder(reminderUpdate);
   
   //return  this.appService.createReminders()
}

@UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}
