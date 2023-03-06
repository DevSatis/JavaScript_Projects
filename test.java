import java.math.BigInteger;


public class B2Hopscotch<E> {
   private Node<E>[] table1, table2;
   private int count;
   private int defaultSize = 7;
   private static int defaultHops = 4;

   /*
   * Grading:
   * Correctly initializes all values - 0.25pt
   */
   public B2Hopscotch()
   {
       //create tables using defaultSize
       table1 = (E[])new Object[nextPrime(defaultSize)];
       table2 = (E[])new Object[nextPrime(defaultSize)];
       count = 0;
   }
   /*
   * Grading:
   * Correctly initializes all values - 0.25pt
   */
   public B2Hopscotch(int size)
   {
       //create tables using prime larger than size
       table1 = (E[])new Object[nextPrime(size)];
       table2 = (E[])new Object[nextPrime(size)];
       count = 0;
   }
    /*
    * Grading:
    * Correctly inserts value into available position - 1pt
    * Correctly moves values 1 step - 1pt
    * Correctly moves values multiple steps - 1pt
    * Correctly prevents values from being to far from expected position - 0.5pt
    * Correctly updating hop values - 0.5pt
    * Correctly determines when to rehash - 0.5pt
    */
   public void insert(E val)
   {
       //add item to table1 or table 2
       //move other items between table1/table2 if needed
       //rehash if more than half full or can't complete insert

       E current = val;

       if(count>(table1.length/2)){
           rehash();
       }

       while (true){

           int table1Index = hashForTable1(current);

           if(table1[table1Index] == null){
               table1[table1Index] = val;
               count++;
               break;
           }
           else {
               E store = table1[table1Index];
               table1[table1Index] = current;
               current = store;
               store = null;

               int table2Index = hashForTable2(current);
               if(table2[table2Index] == null){
                   table2[table2Index] = current;
                   count++;
                   break;
               }
           }
       }
   }
   /*
   * Grading:
   * Correctly finds if value exists in table or not - 1pt
   */
   public boolean contains(E val)
   {
       //return true/false if the value exists in the structure
       int p = hashForTable1(val);
       if(table1[p]!= null && table1[p].equals(val))
       {
           return true;
       }
       p = hashForTable2(val);
       if(table2[p]!= null && table2[p].equals(val))
       {
           return true;
       }
       return false;
   }
   /*
   * Grading:
   * Correctly returns value from table - 1pt
   */
   public E get(E val)
   {
       //return the object if it exists in the structure
       if(this.contains(val)){
           int p = hashForTable1(val);
           if(table1[p].equals(val))
           {
               return val;
           }
           p = hashForTable2(val);
           if(table2[p].equals(val))
           {
               return val;
           }
       }
       return null;
   }
   /*
   * Grading:
   * Correctly removes value from table - .5pt
   */
   public boolean remove(E val)
   {
       //return true/false if the value was successfully removed from the structure
       if(this.contains(val)){
           int p = hashForTable1(val);
           if(table1[p].equals(val))
           {
               table1[p] = null;
               return true;
           }
           p = hashForTable2(val);
           if(table2[p].equals(val))
           {
               table2[p] = null;
               return true;
           }
       }
       return false;
   }
   /*
   * Grading:
   * Correctly empties both tables - 1pt
   */
   public void makeEmpty()
   {
       //clear both table1 and table2 of values, maintain current size
       count=0;
       table1 = (E[])new Object[table1.length];
       table2 = (E[])new Object[table2.length];
   }
   /*
   * Grading:
   * Correctly finds position for value based on universal hashing - 1pt
   */
   private int hashForTable1(E val)
   {
       //return a valid position in table1 using a form of Universal Hashing (slide 24 from part 3)
       //ensure the formula for finding a position is different for both
       return ((((234256234 * val.hashCode() ) + 23452345) % nextPrime(table1.length)) % table1.length);
   }
   /*
   * Grading:
   * Correctly finds DIFFERENT position for value based on universal hashing - 1pt
   */
   private int hashForTable2(E val)
   {
       //return a valid position in table2 using a form of Universal Hashing (slide 24 from part 3)
       //ensure the formula for finding a position is different for both
       return ((((12312312 * val.hashCode() ) + 78907890) % nextPrime(table2.length)) % table2.length);
   }
   /*
   * Grading:
   * Correctly creates larger tables of correct sizes - 1pt
   * Correctly rehashes values to new tables - 1pt
   */
   private void rehash()
   {
       //make the tables the prime above double the current size and move values into the new tables
       count = 0;
       E[] temp = table1;
       table1 = (E[])new Object[nextPrime(table1.length*2)];
       for(E current : temp)
       {
           if(current != null)
           {
               insert(current);
           }
       }

       temp = table2;
       table2 = (E[])new Object[nextPrime(table2.length*2)];
       for(E current : temp)
       {
           if(current != null)
           {
               insert(current);
           }
       }
   }

/*
* COMPLETED METHODS
*/
public void testPositions(int n)
{
System.out.println("Value:Table1:Table2");
for(Integer i = 0; i <= n; i++)
{
System.out.println(i+":"+hashForTable1((E)i)+":"+hashForTable2((E)i));
}
}
private int nextPrime(int n)
{
return new BigInteger(""+n).nextProbablePrime().intValue();
}
public int getUsedSpace()
{
return count;
}
public int getAvailableSpace()
{
//total - used = available
return table1.length+table2.length-count;
}
public String toString()
{
String output = "Table1\n";
if(table1 != null)
{
for(E val : table1)
{
if(val != null)
output += val+",";
}
}
output += "Table2\n";
if(table1 != null)
{
for(E val : table2)
{
if(val != null)
output += val+",";
}
}
return output;
}
}
