function Descending(nums) {
    var result = '';
    var higher = -Infinity;
    nums = nums.split(',');
    var numList = [];
    var secondHigher = -Infinity;

    //add to init list
    for(i=0;i<nums.length;i++) {
        numList.push(parseInt(nums[i]));
    }

    //find the biggest one
    for(i=0;i<numList.length;i++) {
        if(numList[i] > higher) {
            higher = numList[i];
        }
    }

    //sort from high to low
    for(i=0;i<numList.length;i++) {
        if(i==0) {
            result += higher;
        }
        if(i>0) {
            for(j=0;j<numList.length;j++){
                if(numList[j] < higher && numList[j] > secondHigher){
                    secondHigher = numList[j];
                }
            }

            higher = secondHigher;
            secondHigher = -Infinity;
            result += higher;
        }
    }


    return result;

}

mylist = '7,2,6,3,8,4,1,9,5'

console.log(Descending(mylist));