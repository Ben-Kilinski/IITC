// # Output: [1,2,2,3,5,6]
// # Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// # The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1
 
nums1 = [1,2,3,0,0,0] 
m = 3
nums2 = [2,5,6] 
n = 3

function merge (nums1, m, nums2, n) {
    
    for (let i = (nums1.length - 1); i >= 0; i--){
        
        for (let j = (nums1.length - 1); j >= 0; j--){
            
            if (nums1[i] <= nums2[j]){
                nums1[i] = nums2[j]
            }
        }
    }
    console.log(nums1)
};
 
merge (nums1, m, nums2, n)