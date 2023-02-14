import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Util} from "./util";
import {UsersComponent} from "./user/users.component";
import {
  routes
} from "./app-routing.module"
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {NgModuleFactory} from "@angular/core";

describe('AppComponent', () => {
  console.info('ARRANGE');
  let util = new Util();
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersComponent, RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /users', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/users');
  }));

  it('navigate to  "admin" takes you to /admin', fakeAsync(() => {
    router.navigate(['/admin']);
    tick();
    expect(location.path()).toBe('/admin');
  }));

  xdescribe('APP LAUNCH CONFIG', () => {
    xit('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    xit(`should have as title 'angularUnitTestPractice'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('angularUnitTestPractice');
    });

    xit('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('angularUnitTestPractice app is running!');
    });
  });

  xdescribe('MATCHERS', () => {
    console.info('ACT');
    let act = util.calculate(2, 5);

    it('should be {toBe}', () => {
      console.info('ASSERT');
      expect(act).toBe(10);
    });

    it('should be {toEqual}', () => {
      expect(util.add(2, 5)).toEqual(7);
    });

    it('should be {toBeTruthy}', () => {
      expect(util.displayMessage()).toBeTruthy();
    });

    xit('should be {toBeFalse}', () => {
      expect(util.displayMessage()).toBeFalse();// will fail
    });

    it('should be {toBeTrue()}', () => {
      expect(util.isTrue()).toBeTrue();
    });

    xit('should be {toBeTrue()}', () => {
      expect(util.isTrue()).toBeFalse();//will fail
    });

    it('should be {toBeGreaterThan()}', () => {
      expect(util.toBeGreaterThan(12)).toBeGreaterThan(10);
    });

    it('should be {toBeTrue()}', () => {
      expect(util.toBeGreaterThan(12)).toBeGreaterThanOrEqual(10);
    });

    xit('should be {toBeLessThan()}', () => {
      expect(util.toBeGreaterThan(12)).toBeLessThan(10);
    });

    xit('should be {toBeLessThanOrEqual()}', () => {
      expect(util.toBeGreaterThan(12)).toBeLessThanOrEqual(10);
    });

    it('should be {toMatch()}', () => {
      let string = "The eShopKE project";
      let phoneNumber = "254-711-11-13";
      expect(string).toMatch(/eShopKE/);
      expect(string).toMatch(/eShopKE/i);
      expect(string).not.toMatch(/eShp/);
      expect(phoneNumber).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
    });

    it('should be {toBeCloseTo()}', () => {
      let decimal = 10.123456789;
      expect(decimal).toBeCloseTo(10.123);
      expect(decimal).not.toBeCloseTo(10.1123);
    });

    it('should be {toBeDefined()}', () => {
      let obj = {john: 'Who is JOHN'};
      let obj2;
      expect(obj).toBeDefined();
      expect(obj2).not.toBeDefined();
      expect(obj2).toBeUndefined();
    });

    it('should be {toBeNull()}', () => {
      let nullValue = null;
      let notToBeNull = {};
      expect(nullValue).toBeNull();
      expect(notToBeNull).not.toBeNull();
    });

    it('should be {toContain()}', () => {
      let numbers = [10, 12, 13];
      let names = ['A', 'B', 'C'];
      expect(numbers).toContain(10);
      expect(numbers).not.toContain(101);
      expect(names).not.toContain('D');
    });

    it('should be {toBeNaN()}', () => {
      expect(Number('A') / 0).toBeNaN();
      expect(0 / 7).not.toBeNaN();
    });

    it('should be {toBePositiveInfinity()}', () => {
      expect(1 / 0).toBePositiveInfinity();
    });

    it('should be {toBePositiveInfinity()}', () => {
      expect(-1 / 0).toBeNegativeInfinity();
    });
  });

  xdescribe('TREE HIERARCHY', () => {
    beforeAll(async () => {
      console.info('BEFORE ALL');
    });
    afterAll(async () => {
      console.info('AFTER ALL')
    });
    beforeEach(async () => {
      console.info('BEFORE EACH')
    });
    afterEach(async () => {
      console.info('AFTER EACH')
    });
    it('should ', () => {
      console.info('WAITING')
    });
  });

});
