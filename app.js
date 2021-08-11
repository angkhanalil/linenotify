const express = require('express')
const app = express()
 
const cron = require('node-cron');
const lineapi = require('line-api');
const datentime = require('date-and-time');


const notify = new lineapi.Notify({
    token:"TuAawoUvSdT04vLs5HoBzH6ZRZFzdrKxwmDT0BfD2na"
  });

  cron.schedule('*/5 * * * *',function(){
    const now = new Date();
    let curr_date = datentime.format(now,'YYYY-MM-DD');//= new Date(Date.now()).toLocaleString();
    let valid_date = datentime.format(datentime.addDays(now,3),'YYYY-MM-DD');// datentime.format(now,'YYYY-MM-DD');
    console.log(curr_date);
    console.log("---------------");
    let msg = "test line " + curr_date + " valid " + valid_date;
    notify.send({
      message:msg
    })
  
  });
