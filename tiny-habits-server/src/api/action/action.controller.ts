import { Controller } from '@nestjs/common';
import { ActionService } from '@src/models/actions/action.service';

@Controller('api/actions')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}
}
