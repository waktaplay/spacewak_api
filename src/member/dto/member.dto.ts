// import { IMember } from 'src/common/repository/schemas/artist.schema';

export class memberDto /*implements IMember*/ {
  /**
   * 멤버 고유 ID (보통 영문명 소문자)
   * @example 'viichan'
   */
  id: string;

  /**
   * 멤버 한글명
   * @example '비찬'
   */
  name: string;

  /**
   * 멤버 영문명
   * @example 'VIichan'
   */
  engName: string;

  /**
   * 멤버 약칭
   * @example '비찬'
   */
  shortName: string;

  /**
   * 멤버 소속 그룹 고유 ID
   * @example 'isedol'
   */
  group: string;

  /**
   * 멤버 대표 색상
   * @example '85AC20'
   */
  color: string;

  /**
   * 멤버 트위치 ID
   * @example 'viichan6'
   */
  twitch?: string;

  /**
   * 멤버 아프리카 ID (NEW)
   * @example 'viichan6'
   */
  afreecatv?: string;

  /**
   * 멤버 유튜브 ID
   * @example 'viichan116'
   */
  youtube?: string;

  /**
   * 멤버 인스타그램 ID
   * @example 'viichan6'
   */
  instagram?: string;
}
