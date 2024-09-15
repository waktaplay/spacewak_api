import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';

// import { IMember } from '';
// import { IMusic } from '';

import { APIException } from 'src/common/dto/APIException.dto';

import { memberDto } from './dto/member.dto';
import { memberSearchDto } from './dto/memberSearch.dto';

@Injectable()
export class MemberService {
  private readonly logger = new Logger(MemberService.name);

  constructor(
    @Inject('MEMBER_MODEL')
    private readonly memberModel: Model<IMember>,
    @Inject('MUSIC_MODEL')
    private readonly musicModel: Model<IMusic>,
  ) {}

  async getMemberList(): Promise<memberDto[]> {
    try {
      // return this.memberModel.find().select();
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async getOneMember(
    id: string,
    page: number = 1,
    size: number = 20,
  ): Promise<memberSearchDto> {
    try {
      const searchQuery = {};
      searchQuery[`artist.${id}`] = true;

      switch (id) {
        case 'isedol':
          searchQuery['artist.ine'] = true;
          searchQuery['artist.jingburger'] = true;
          searchQuery['artist.lilpa'] = true;
          searchQuery['artist.jururu'] = true;
          searchQuery['artist.gosegu'] = true;
          searchQuery['artist.viichan'] = true;
          break;
        case 'gomem':
          searchQuery['artist.chunyang'] = true;
          searchQuery['artist.chunshik'] = true;
          searchQuery['artist.kwonmin'] = true;
          searchQuery['artist.kimchimandu'] = true;
          searchQuery['artist.nosferatuhodd'] = true;
          searchQuery['artist.dandapbug'] = true;
          searchQuery['artist.dopamine'] = true;
          searchQuery['artist.dokkhye'] = true;
          searchQuery['artist.roentgenium'] = true;
          searchQuery['artist.haku'] = true;
          searchQuery['artist.bujungingan'] = true;
          searchQuery['artist.secretto'] = true;
          searchQuery['artist.businesskim'] = true;
          searchQuery['artist.friedshrimp'] = true;
          searchQuery['artist.sophia'] = true;
          searchQuery['artist.wakphago'] = true;
          searchQuery['artist.leedeoksoo'] = true;
          searchQuery['artist.carnarjungtur'] = true;
          searchQuery['artist.callycarly'] = true;
          searchQuery['artist.pungsin'] = true;
          searchQuery['artist.freeter'] = true;
          searchQuery['artist.rusuk'] = true;
          searchQuery['artist.hikiking'] = true;
          break;
        case 'gomem-academy':
          searchQuery['artist.ninnin'] = true;
          searchQuery['artist.ballantine'] = true;
          searchQuery['artist.bulgom'] = true;
          searchQuery['artist.jentu'] = true;
          searchQuery['artist.soosemi'] = true;
          searchQuery['artist.sirianrain'] = true;
          searchQuery['artist.amadeuschoi'] = true;
          searchQuery['artist.jinhe'] = true;
          searchQuery['artist.gilbert'] = true;
          searchQuery['artist.sullivan'] = true;
          break;
      }

      const countResult = await this.musicModel.countDocuments(searchQuery);

      const memberSearchResult = await this.musicModel
        .find(searchQuery)
        .skip(size * (page - 1))
        .limit(size)
        .sort({ uploadDate: -1 })
        .select();

      /*
      return {
        member: await
        music: {
          page: page,
          count: countResult,
          hasNext: countResult > size * page,
          data:
        }
      }
      */
    } catch (err) {
      this.logger.error(err);
      throw new APIException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        '내부 서버 오류가 발생했습니다.',
      );
    }
  }
}
