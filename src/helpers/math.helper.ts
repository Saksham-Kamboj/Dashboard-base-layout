/** Redirection Class */
export class MathHelper {
  /**
   * Return decimal up to 2 decimal places
   * @param {number} value
   * @return {number}
   */
  public static roundAccurately(value: number): number {
    return (Math.floor(value + Number.EPSILON) * 100) / 100;
  }

  /**
   *  Returns page count
   * @param {number}totalCount
   * @param {number}limit
   * @return {number}
   */
  public static pageCount(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
  }

  /**
   * Generate Random Number between a range
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  public static generateRandom(min = 0, max = 100): number {
    // find diff
    const difference = max - min;
    // generate random number
    let rand = Math.random();
    // multiply with difference
    rand = Math.floor(rand * difference);
    // add with min value
    rand += min;
    return rand;
  }

  /**
   * Get % between compare and new
   * @param {number} compare
   * @param {number} count
   * @return {number}
   */
  public static getComparePercentage(compare: number, count: number): number {
    const percentage = (compare / 100) * count;

    if (compare - count < 0) {
      return -percentage;
    }

    return percentage;
  }
}
