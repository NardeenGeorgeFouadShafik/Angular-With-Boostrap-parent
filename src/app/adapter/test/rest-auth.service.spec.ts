import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { UserCredentail } from '../../domain/models/user-credential.model';
import { Token } from '../../domain/models/token.model';
import { provideHttpClient } from '@angular/common/http';
import { RestAuthService } from '../rest/auth-services';

describe('RestAuthService', () => {
  let service: RestAuthService;
  let httpMock: HttpTestingController;

  const mockUserCredential: UserCredentail = {
    email: 'john.doe@example.com',
    password: 'password123',
  };

  const mockToken: Token = {
    token: 'abcd1234',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RestAuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(RestAuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', () => {
    service.login(mockUserCredential).subscribe((token) => {
      expect(token).toEqual(mockToken);
    });

    const req = httpMock.expectOne(`${environment.backendUrl}api/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockToken);
  });
});
