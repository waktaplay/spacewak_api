import { memberDto } from './member.dto';
// import { musicDto } from 'src/songs/dto/music.dto';

export class memberSearchDto {
  member: memberDto;
  music: {
    page: number;
    count: number;
    hasNext: boolean;
    data: musicDto[];
  };
}

export default memberSearchDto;
