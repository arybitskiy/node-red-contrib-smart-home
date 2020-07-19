import { hex2dec } from './hex2dec';

export const parseCommandClasses = (commandClasses: string | undefined) =>
  (typeof commandClasses === 'string' ? commandClasses.split(',') : []).map(commandClass => hex2dec(commandClass));
