import { TestBed, async } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  }));

  test('should render user info', () => {
    const fixture = TestBed.createComponent(UserComponent);
    fixture.componentInstance.user = {
      name: 'Kevin',
      job: 'Frontender'
    };
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
