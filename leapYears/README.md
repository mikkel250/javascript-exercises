# Exercise XX - leapYears

Create a function that determines whether or not a given year is a leap year.  Leap years are determined by the following rules:

>There is a leap year every year whose number is perfectly divisible by four - except for years which are both divisible by 100 and not divisible by 400. The second part of the rule effects century years. For example; the century years 1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.

Explained better: 
>What to do to figure out if it's a leap year or not:
 >We add a leap day every four years, except for every 100 years, except for every 400 years.
> 
 >In other words ...
 >
 >If the year is divisible by 4, then it's a leap year, UNLESS
 >
 >it's also divisible by 100, then it's not a leap year, UNLESS FURTHER
 >
 >the year is divisible by 400, then it is a leap year.
 >
 >So 1996 was a leap year, but 1997, 1998, and 1999 were not. The year 2000 was a leap year, because even though it is divisible by 100 it's also divisible by 400.
 >
 >The years 1700, 1800, and 1900 were not leap years, but 2000 was. The year 2100 won't be, nor 2200, nor 2300. But 2400 will be.
 
```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```


## hints
- use an `if` statement and `&&` to make sure all the conditions are met properly
