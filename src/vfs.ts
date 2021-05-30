// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols

import { SQLITE, SQLITE_IOCAP, SQLITE_IOERR } from "./consts.js";

export type ResultCode = SQLITE | SQLITE_IOERR | Promise<SQLITE | SQLITE_IOERR>;
export type AsyncReturn = number | SQLITE | SQLITE_IOERR | Promise<number | SQLITE | SQLITE_IOERR>;

export interface Data {
  readonly size: number,
  value: Int8Array
}

export interface NumberSetter {
  set(value: number): void
}

export interface ArrayContainer {
  value: Int8Array
}

export interface SQLiteVFS {
  /**
   * The name of the VFS. Used as key for registration.
   */
  name(): string

  /**
   * Close the VFS and cleanup all its internal resources.
   * After close was called the VFS should not be used anymore.
   */
  close(): void

  xAccess(name: string, flags: number, pResOut: NumberSetter): ResultCode

  xOpen(name: string | null, fileId: number, flags: number, pOutFlags: NumberSetter): ResultCode

  xDelete(name: string, syncDir: number): ResultCode

  xClose(fileId: number): ResultCode

  xRead(fileId: number, pData: Data, iOffset: number): ResultCode

  xWrite(fileId: number, pData: Data, iOffset: number): ResultCode

  xTruncate(fileId: number, iSize: number): ResultCode

  xSync(fileId: number, flags: number): ResultCode

  xLock(fileId: number, flags: number): ResultCode

  xUnlock(fileId: number, flags: number): ResultCode

  xCheckReservedLock(fileId: number, pResOut: NumberSetter): ResultCode

  xFileSize(fileId: number, pSize64: NumberSetter): ResultCode

  xFileControl(fileId: number, flags: number, pOut: ArrayContainer): ResultCode

  xSectorSize(fileId: number): number | Promise<number>

  xDeviceCharacteristics(fileId: number): number | Promise<number>
}

/**
 * Base class for a VFS.
 */
export abstract class BaseVFS implements SQLiteVFS {

  abstract name(): string

  close(): void {

  }

  xAccess(name: string, flags: number, pResOut: NumberSetter): ResultCode {
    return SQLITE.IOERR;
  }

  xOpen(name: string | null, fileId: number, flags: number, pOutFlags: NumberSetter): ResultCode {
    return SQLITE.CANTOPEN;
  }

  xDelete(name: string, syncDir: number): ResultCode {
    return SQLITE.IOERR;
  }

  xClose(fileId: number): ResultCode {
    return SQLITE.IOERR;
  }

  xRead(fileId: number, pData: Data, iOffset: number): ResultCode {
    return SQLITE.IOERR;
  }

  xWrite(fileId: number, pData: Data, iOffset: number): ResultCode {
    return SQLITE.IOERR;
  }

  xTruncate(fileId: number, iSize: number): ResultCode {
    return SQLITE.IOERR;
  }

  xSync(fileId: number, flags: number): ResultCode {
    return SQLITE.OK;
  }

  xLock(fileId: number, flags: number): ResultCode {
    return SQLITE.OK;
  }

  xUnlock(fileId: number, flags: number): ResultCode {
    return SQLITE.OK;
  }

  xCheckReservedLock(fileId: number, pResOut: NumberSetter): ResultCode {
    pResOut.set(0);
    return SQLITE.OK;
  }

  xFileSize(fileId: number, pSize64: NumberSetter): ResultCode {
    return SQLITE.IOERR;
  }

  xFileControl(fileId: number, flags: number, pOut: ArrayContainer): ResultCode {
    return SQLITE.NOTFOUND;
  }

  xSectorSize(fileId: number): number | Promise<number> {
    return 0;
  }

  xDeviceCharacteristics(fileId: number): number | Promise<number> {
    return SQLITE_IOCAP.IMMUTABLE;
  }

  /**
   * Handle asynchronous operation. This implementation will be overridden on
   * registration by an Asyncify build.
   */
  handleAsync(f: () => AsyncReturn): AsyncReturn {
    throw new Error("No Asyncify runtime");
  }
}
