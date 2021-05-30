// noinspection JSUnusedGlobalSymbols

// Primary result codes.
// https://www.sqlite.org/rescode.html
export enum SQLITE {
  OK         = 0,
  ERROR      = 1,
  INTERNAL   = 2,
  PERM       = 3,
  ABORT      = 4,
  BUSY       = 5,
  LOCKED     = 6,
  NOMEM      = 7,
  READONLY   = 8,
  INTERRUPT  = 9,
  IOERR      = 10,
  CORRUPT    = 11,
  NOTFOUND   = 12,
  FULL       = 13,
  CANTOPEN   = 14,
  PROTOCOL   = 15,
  EMPTY      = 16,
  SCHEMA     = 17,
  TOOBIG     = 18,
  CONSTRAINT = 19,
  MISMATCH   = 20,
  MISUSE     = 21,
  NOLFS      = 22,
  AUTH       = 23,
  FORMAT     = 24,
  RANGE      = 25,
  NOTADB     = 26,
  NOTICE     = 27,
  WARNING    = 28,
  ROW        = 100,
  DONE       = 101
}

// Extended error codes.
export enum SQLITE_IOERR {
  ACCESS            = 3338,
  CHECKRESERVEDLOCK = 3594,
  CLOSE             = 4106,
  DATA              = 8202,
  DELETE            = 2570,
  DELETE_NOENT      = 5898,
  DIR_FSYNC         = 1290,
  FSTAT             = 1802,
  FSYNC             = 1034,
  GETTEMPPATH       = 6410,
  LOCK              = 3850,
  NOMEM             = 3082,
  READ              = 266,
  RDLOCK            = 2314,
  SEEK              = 5642,
  SHORT_READ        = 522,
  TRUNCATE          = 1546,
  UNLOCK            = 2058,
  VNODE             = 6922,
  WRITE             = 778,
  BEGIN_ATOMIC      = 7434,
  COMMIT_ATOMIC     = 7690,
  ROLLBACK_ATOMIC   = 7946
}

// Other extended result codes.
export enum SQLITE_CONSTRAINT {
  CHECK      = 275,
  COMMITHOOK = 531,
  FOREIGNKEY = 787,
  FUNCTION   = 1043,
  NOTNULL    = 1299,
  PINNED     = 2835,
  PRIMARYKEY = 1555,
  ROWID      = 2579,
  TRIGGER    = 1811,
  UNIQUE     = 2067,
  VTAB       = 2323
}

// Open flags.
// https://www.sqlite.org/c3ref/c_open_autoproxy.html
export enum SQLITE_OPEN {
  READONLY      = 0x00000001,
  READWRITE     = 0x00000002,
  CREATE        = 0x00000004,
  DELETEONCLOSE = 0x00000008,
  EXCLUSIVE     = 0x00000010,
  AUTOPROXY     = 0x00000020,
  URI           = 0x00000040,
  MEMORY        = 0x00000080,
  MAIN_DB       = 0x00000100,
  TEMP_DB       = 0x00000200,
  TRANSIENT_DB  = 0x00000400,
  MAIN_JOURNAL  = 0x00000800,
  TEMP_JOURNAL  = 0x00001000,
  SUBJOURNAL    = 0x00002000,
  SUPER_JOURNAL = 0x00004000,
  NOMUTEX       = 0x00008000,
  FULLMUTEX     = 0x00010000,
  SHAREDCACHE   = 0x00020000,
  PRIVATECACHE  = 0x00040000,
  WAL           = 0x00080000,
  NOFOLLOW      = 0x01000000
}

// Locking levels.
// https://www.sqlite.org/c3ref/c_lock_exclusive.html
export enum SQLITE_LOCK {
  NONE      = 0,
  SHARED    = 1,
  RESERVED  = 2,
  PENDING   = 3,
  EXCLUSIVE = 4
}

// Device characteristics.
// https://www.sqlite.org/c3ref/c_iocap_atomic.html
export enum SQLITE_IOCAP {
  ATOMIC                = 0x00000001,
  ATOMIC512             = 0x00000002,
  ATOMIC1K              = 0x00000004,
  ATOMIC2K              = 0x00000008,
  ATOMIC4K              = 0x00000010,
  ATOMIC8K              = 0x00000020,
  ATOMIC16K             = 0x00000040,
  ATOMIC32K             = 0x00000080,
  ATOMIC64K             = 0x00000100,
  SAFE_APPEND           = 0x00000200,
  SEQUENTIAL            = 0x00000400,
  UNDELETABLE_WHEN_OPEN = 0x00000800,
  POWERSAFE_OVERWRITE   = 0x00001000,
  IMMUTABLE             = 0x00002000,
  BATCH_ATOMIC          = 0x00004000
}

// xAccess flags.
// https://www.sqlite.org/c3ref/c_access_exists.html
export enum SQLITE_ACCESS {
  EXISTS    = 0,
  READWRITE = 1,
  READ      = 2
}

// File control opcodes
// https://www.sqlite.org/c3ref/c_fcntl_begin_atomic_write.html#sqlitefcntlbeginatomicwrite
export enum SQLITE_FCNTL {
  LOCKSTATE             = 1,
  GET_LOCKPROXYFILE     = 2,
  SET_LOCKPROXYFILE     = 3,
  LAST_ERRNO            = 4,
  SIZE_HINT             = 5,
  CHUNK_SIZE            = 6,
  FILE_POINTER          = 7,
  SYNC_OMITTED          = 8,
  WIN32_AV_RETRY        = 9,
  PERSIST_WAL           = 10,
  OVERWRITE             = 11,
  VFSNAME               = 12,
  POWERSAFE_OVERWRITE   = 13,
  PRAGMA                = 14,
  BUSYHANDLER           = 15,
  TEMPFILENAME          = 16,
  MMAP_SIZE             = 18,
  TRACE                 = 19,
  HAS_MOVED             = 20,
  SYNC                  = 21,
  COMMIT_PHASETWO       = 22,
  WIN32_SET_HANDLE      = 23,
  WAL_BLOCK             = 24,
  ZIPVFS                = 25,
  RBU                   = 26,
  VFS_POINTER           = 27,
  JOURNAL_POINTER       = 28,
  WIN32_GET_HANDLE      = 29,
  PDB                   = 30,
  BEGIN_ATOMIC_WRITE    = 31,
  COMMIT_ATOMIC_WRITE   = 32,
  ROLLBACK_ATOMIC_WRITE = 33,
  LOCK_TIMEOUT          = 34,
  DATA_VERSION          = 35,
  SIZE_LIMIT            = 36,
  CKPT_DONE             = 37,
  RESERVE_BYTES         = 38,
  CKPT_START            = 39
}

// Fundamental datatypes.
// https://www.sqlite.org/c3ref/c_blob.html
export const SQLITE_INTEGER = 1;
export const SQLITE_FLOAT   = 2;
export const SQLITE_TEXT    = 3;
export const SQLITE_BLOB    = 4;
export const SQLITE_NULL    = 5;

// Special destructor behavior.
// https://www.sqlite.org/c3ref/c_static.html
export const SQLITE_STATIC    =  0;
export const SQLITE_TRANSIENT = -1;

// Text encodings.
// https://sqlite.org/c3ref/c_any.html
export const SQLITE_UTF8    = 1; /* IMP: R-37514-35566 */
export const SQLITE_UTF16LE = 2; /* IMP: R-03371-37637 */
export const SQLITE_UTF16BE = 3; /* IMP: R-51971-34154 */
export const SQLITE_UTF16   = 4; /* Use native byte order */

// Module constraint ops.
export enum SQLITE_INDEX {
  SCAN_UNIQUE          = 1, /* Scan visits at most = 1 row */
  CONSTRAINT_EQ        = 2,
  CONSTRAINT_GT        = 4,
  CONSTRAINT_LE        = 8,
  CONSTRAINT_LT        = 16,
  CONSTRAINT_GE        = 32,
  CONSTRAINT_MATCH     = 64,
  CONSTRAINT_LIKE      = 65,
  CONSTRAINT_GLOB      = 66,
  CONSTRAINT_REGEXP    = 67,
  CONSTRAINT_NE        = 68,
  CONSTRAINT_ISNOT     = 69,
  CONSTRAINT_ISNOTNULL = 70,
  CONSTRAINT_ISNULL    = 71,
  CONSTRAINT_IS        = 72,
  CONSTRAINT_FUNCTION  = 150
}
