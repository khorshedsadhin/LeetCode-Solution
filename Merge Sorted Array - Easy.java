class Solution {
    public static void merge(int[] num1, int m, int[] num2, int n) {
    
       //inserting num2 elements in num1
       for(int i = 0; i < n; i++)  {
            num1[m+i] = num2[i];
       }

       //now i just have to sort the num1 array
       sort(num1);
    }

    public static void sort(int[] arr) {
        /*
        Arrays.sort uses quicksort which is dumb
        Collection.sort uses mergesort -> O(nlog n)
        */
        ArrayList<Integer> al = new ArrayList<>();
        for (int x : arr) {
            al.add(x);
        }
        Collections.sort(al);
        for (int i = 0; i < arr.length; i++) {
            arr[i] = al.get(i);
        }
    }
}
