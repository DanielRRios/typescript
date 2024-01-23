function Bs(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const tp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tp;
        }
      }
    }
    return arr;
  }
  const arr = [3, 2, 5, 1, 4];
  console.log(Bs(arr));
  