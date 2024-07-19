import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { User } from '../../domain/models/user.model';
import { environment } from '../../../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { RestUserService } from '../rest/rest-user-services';

describe('RestUserService', () => {
  let service: RestUserService;
  let httpMock: HttpTestingController;

  const mockUser: Partial<User> = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const mockUsersResponse = {
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
      // Additional mock users...
    ],
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
  };

  const selectedUser = {
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RestUserService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(RestUserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a user', () => {
    service.createUser(mockUser).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/users`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('should get users', () => {
    service.getUsers(2).subscribe((users: any) => {
      expect(users.data).toEqual(mockUsersResponse.data);
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/users?page=2`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsersResponse);
  });

  it('should get a user by id', () => {
    service.getUser(2).subscribe((user: any) => {
      expect(user.data).toEqual(selectedUser.data);
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/users2`);
    expect(req.request.method).toBe('GET');
    req.flush(selectedUser);
  });

  it('should edit a user', () => {
    service.editUser(1, mockUser).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/users1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockUser);
  });

  it('should delete a user', () => {
    service.deleteUser(1).subscribe(() => {
      expect().nothing();
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/users1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
