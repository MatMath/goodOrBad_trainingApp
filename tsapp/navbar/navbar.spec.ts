/*
======== A Handy Little Jasmine Reference ========
inspired by  https://github.com/pivotal/jasmine/wiki/Matchers
Spec matchers:
expect(x).toEqual(y); compares objects or primitives x and y and passes if they are equivalent
expect(x).toBe(y); compares objects or primitives x and y and passes if they are the same object
expect(x).toMatch(pattern); compares x to string or regular expression pattern and passes if they match
expect(x).toBeDefined(); passes if x is not undefined
expect(x).toBeUndefined(); passes if x is undefined
expect(x).toBeNull(); passes if x is null
expect(x).toBeTruthy(); passes if x evaluates to true
expect(x).toBeFalsy(); passes if x evaluates to false
expect(x).toContain(y); passes if array or string x contains y
expect(x).toBeLessThan(y); passes if x is less than y
expect(x).toBeGreaterThan(y); passes if x is greater than y
expect(x).toBeCloseTo; matcher is for precision math comparison
expect(x).toThrow; matcher is for testing if a function throws an exception
expect(x).toThrowError; matcher is for testing a specific thrown exception
expect(function(){fn();}).toThrow(e); passes if function fn throws exception e when executed
Every matcher's criteria can be inverted by prepending .not:
expect(x).not.toEqual(y); compares objects or primitives x and y and passes if they are not equivalent
Custom matchers help to document the intent of your specs, and can help to remove code duplication in your specs.
beforeEach(function() {
this.addMatchers({});
*/

/* tslint:disable:no-unused-variable */
import { Navbar } from './navbar';

import { async, inject, TestComponentBuilder } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

describe('Navbar Component', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(Navbar).then(fixture => {
      expect(fixture.componentInstance instanceof Navbar).toBe(true, 'should create Navbar');
    });
  })));

  it('should have a Navbar element',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(Navbar).then(fixture => {
      let home = fixture.debugElement.query(By.css('a[href="home"]')).nativeElement;
      let pictPage = fixture.debugElement.query(By.css('a[href="pictpage"]')).nativeElement;
      let dashboard = fixture.debugElement.query(By.css('a[href="dashboard"]')).nativeElement;
      let golden = fixture.debugElement.query(By.css('a[href="golden"]')).nativeElement;
      expect(home).toBeDefined();
      expect(pictPage.innerText).toMatch('Trainning');
      expect(dashboard.innerText).toMatch('Dashboard');
      expect(golden.innerText).toMatch('Golden Image');
    });

  })));

});
