import { Module } from '@nestjs/common';
// import {HttpModule} from '@nestjs/axios'

// import {RepositoryModule} from '';
// import {musicProviders} from '';
// import {memberProviders} from '';

import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [
    /*HttpModule*/
  ],
  controllers: [MemberController /*...musicProviders, ...artistProviders */],
  providers: [MemberService],
})
export class MemberModule {}
