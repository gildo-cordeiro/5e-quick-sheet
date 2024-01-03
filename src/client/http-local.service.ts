import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class HttpLocalService {
  private readonly logger = new Logger(HttpLocalService.name);

  constructor(private readonly httpService: HttpService) {}

  async get(url: string): Promise<any> {
    const request = this.httpService.get(url).pipe(
      map((response: AxiosResponse<any>) => response.data),
      catchError((e) => {
        this.logger.error(`Error fetching from API: ${e.message}`);
        throw new ForbiddenException('API not available', e);
      }),
    );

    const api = await lastValueFrom(request);

    this.logger.log(api);

    return api;
  }
}
