import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { Company } from '../company';
import Pusher from 'pusher-js';

@Controller('companies')
export class CompaniesController {

    private companies = [
        new Company("Coke", "Soda", "Ketu Lagos"),
        new Company("Apple", "Computers", "Ikeja Lagos"),
        new Company("Realcode", "Programming", "Nigeria")
    ]
    

    @Get()
    getCompanies(@Req() req, @Res() res, err) {
        // let pusher = new Pusher('e6c6d225b2ca71968dcc', {
        //     cluster: 'eu',
        //     encrypted: true
        // });

        // const channel = pusher.subscribe('company');
        // channel.bind('company_data', data => {
        //     this.companies.push(data);
        // });

        res.render('index',{companies: this.companies});
    }

    @Post()
    createCompany(@Body() company: Company) {

        const Pusher = require('pusher');
        
        var pusher = new Pusher({
            appId: '410534',
            key: 'e6c6d225b2ca71968dcc',
            secret: '6544eaa9a784f0b0642b',
            cluster: 'eu',
            encrypted: true
          });

          pusher.trigger('company', 'company_data', company);
        
    }

}