# Methods
At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

```javascript
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```
In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.
Instructions
1.
In the Surgeon constructor, prepend the name and department properties with an underscore (_).
2.
Inside of the `constructor()`, add a property named _remainingVacationDays and set it equal to 20.
3.
Under the `constructor()`, create a getter called name that returns the value saved to `_name`.
Stuck? Get a hint
4.
Under the name getter, create a getter called department that returns the value saved to `_department`.
Stuck? Get a hint
5.
Under the department getter, create a getter called `remainingVacationDays` that returns the value saved to `_remainingVacationDays`.
Stuck? Get a hint
6.
Under the `remainingVacationDays` getter, create a method called `takeVacationDays` that accepts one argument named `daysOff`.

Inside of the method, subtract daysOff from the number saved to `_remainingVacationDays`. Set `_remainingVacationDays` to the result.