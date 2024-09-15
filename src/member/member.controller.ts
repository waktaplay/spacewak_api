import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

import { MemberService } from './member.service';

import { memberDto } from './dto/member.dto';
import { memberSearchDto } from './dto/memberSearch.dto';

@Controller('member')
export class MemberController {
  private readonly logger = new Logger(MemberController.name);

  constructor(private readonly memberService: MemberService) {}

  @Get('')
  @ApiOperation({
    summary: '멤버 리스트 확인',
    description: '왁타플레이에 등록된 멤버 리스트를 확인합니다.',
  })
  async getMemberList(): Promise<memberDto[]> {
    return await this.memberService.getMemberList();
  }

  @Get(':id')
  @ApiOperation({
    summary: '멤버 정보 확인',
    description: '선택한 왁타플레이 멤버 정보를 확인합니다.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
  })
  async getOneMember(
    @Param('id') id: string,
    @Query('page') page: string = '1',
    @Query('size') size: string = '20',
  ): Promise<memberSearchDto> {
    return await this.memberService.getOneMember(
      id,
      parseInt(page, 10),
      parseInt(size, 10),
    );
  }
}
