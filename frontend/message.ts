export default {
  confirm: {
    warning: 'Warning',
    updateConfirm: 'Confirm Update',
    deleteSelected: 'Are you sure you want to delete the selected data?',
    deleteSelectedWithoutPk: 'Are you sure you want to delete the selected data? No primary key found, this change might affect more records than expected!',
    deleteForward: 'Are you sure you want to delete this port forwarding?',
    deleteRedisKey: 'Are you sure you want to delete this key?',
  },
  common: {
    new: 'New',
    copied: 'Copied!',
    create: 'Create',
    cancel: 'Cancel',
    ok: 'OK',
    refresh: 'Refresh',
    update: 'Update',
    choose: 'Choose',
    close: 'Close',
    name: 'Name',
    type: 'Type',
    comment: 'Comment',
    log: 'Log',
    default: 'Default',
    readonly: 'This connection is read-only!',
    developerTool: 'Toggle Developer Tools'
  },
  state: {
    viewType: 'View Type:',
    rowHeight: 'Row Height:',
    fontSize: 'Font Size:',
    textAlign: 'Text Align:',
    borderType: 'Border:',
    showComment: 'Show Comment:',
    columnConfig: 'Column Config',
    columnWidth: 'Column Width:',
    columnMaximumWidth: 'Column Maximum Width:',
  },
  notice: {
    copySuccess: 'Copied!'
  },
  design: {
    table: 'Name',
    engine: 'Engine',
    collate: 'Collate',
    check: 'Check',
    clause: 'Clause',
    operation: 'Operation',
    newIndex: 'New Index',
    newCheck: 'New Check',
    newForeignKey: 'New Foreign Key',
    newColumn: 'New Column',
    updateColumn: 'Update Column',
    column: 'Column',
    foreignKey: 'Foreign Key',
    length: 'Length',
    isPrimary: 'Primary Key',
    isUnique: 'UNIQUE',
    isAutoIncrement: 'Auto Increment',
    isNotNull: 'Not Null',
    index: 'Index',
    indexName: 'Index Name',
    indexMethod: 'Index Method',
    unique: 'Unique',
    foreignKeyName: 'Foreign Key Name',
    constraintName: 'Constraint Name',
    referencedTable: 'Referenced Table',
    referencedColumn: 'Referenced Column',
    updateRule: 'Update Rule',
    deleteRule: 'Delete Rule',
    ddl: 'DDL',
    deleteColumnConfirm: 'Are you sure you want to delete this column?',
    deleteIndexConfirm: 'Are you sure you want to delete this index?',
    deleteCheckConfirm: 'Are you sure you want to delete this check?',
    deleteFkConfirm: 'Are you sure you want to delete this foreign key?',
    updateSuccess: 'Update successfully!',
  },
  table: {
    data: 'DATA',
    design: 'Properties',
    process: 'Process',
    monitor: 'Monitor',
    history: 'History',
    erDiagram: 'Diagram',
  },
  sshStatus: {
    systemInfo: 'System Info',
    cpuInfo: 'CPU Info',
    cpuName: 'Name',
    cpuClock: 'Clock',
    cpuCoreCount: 'Logic Core Count',
    hostname: 'Host Name',
    os: 'OS',
    arch: 'Architecture',
    runTime: 'Run Time',
    kernelVersion: 'Kernel Version',
    systemStatus: 'System Status',
    memory: 'Memory',
    disk: 'Disk',
    network: 'Network',
  },
  util: {
    common: 'Common',
    translate: 'Translate',
    img2Base64: 'Image To Base64',
    qrcode: 'QR Code',
  },
  global: {
    changeLog: 'Changes',
    document: 'Document',
    util: 'Util',
    settings: 'Settings',
    plan: 'Plan',
    login: 'Login',
    logout: 'Log out',
  },
  connect: {
    dm: 'DM8',
    use: 'Use',
    title: 'Connect to server',
    name: 'Name',
    connectionName: 'Connection Name',
    group: 'Group',
    groupPlaceholder: 'Parent/Sub',
    readOnly: 'Read Only',
    savePassword: 'Save Password',
    savePasswordForever: 'Yes',
    savePasswordNever: 'No',
    scope: 'Scope',
    option: 'Option',
    success: 'Success!',
    error: 'Connection error!',
    global: 'Global',
    current: 'Workspace',
    connecting: 'Connect',
    socketPath: 'Socket Path',
    connectionType: 'Connection Type',
    save: 'Save',
    enable: 'Enable',
    main: 'Main',
    sshTunnel: 'SSH Tunnel',
    socksProxy: 'Socks Proxy',
    httpProxy: 'HTTP Proxy',
    connectTimeout: 'Timeout(ms)',
    requestTimeout: 'Request Timeout',
    hideSystemSchema: 'Hide System Schema',
    connectString: 'Connection String',
    customJdbcUrl: 'Custom JDBC URL',
    usingConnectString: 'Use Connection String',
    chooseSqlite: 'Choose Database File',
    advance: 'Advanced',
    algorithm: 'Algorithm',
    ftpEncoding: 'Encoding',
    protocol: 'Protocol',
    coLatestVersion: 'Latest Version',
    pruneSFTPRoot: 'Prune Root',
    showHiddenFiles: 'Show Hidden Files',
    mongoNotice: 'MongoDB has less support, only recommended for browsing data.',
    s3Notice: 'Support connecting to any service compatible with AWS S3 protocol, such as Minio.',
    hasDockerNotice: 'Check that Docker is installed and you can connect directly via the connect button.',
  },
  ssh: {
    util: 'Util',
    theme: 'Theme',
    cursor: 'Cursor',
    shell: 'Shell to be executed after opening the terminal.',
    portForward: {
      local: 'Forward destination address from remote server to local.',
      remote: 'Forward local address to remote server.',
      dynamic: 'Create a local SOCKS proxy using a remote server.',
    }
  },
  config: {
    plain: 'Config',
    features: 'Features',
    sslConfig: 'SSL Config',
    usingCustomDatabaseName: 'Using Custom Databases',
    serverType: 'Server Type',
    more: 'More',
    host: 'Host',
    port: 'Port',
    account: 'Account',
    username: 'Username',
    password: 'Password',
    passphrase: 'Passphrase',
    key: 'Key',
    auto: 'Auto',
    privateKeyAndPassword: 'Private Key and Password',
    database: 'Database',
    databaseNumber: 'Number of databases',
    redisTotalKeyCount: 'The total number of keys',
    dbPath: 'Database Path',
    mongoAuthSource: 'Auth Database',
    databasePlaceholder: 'Database',
    dialect: 'Dialect',
    driverName: 'Driver Name',
    driverPath: 'Driver Path',
    showedBuckets: 'Showed Buckets',
    showedDatabases: 'Showed Databases',
    startupSQL: 'Startup SQL',
    customTerminalCommand: 'Custom Terminal Command',
    privateKeyPath: 'Private Key Path',
    timeZone: 'Time Zone',
    groupingTables: 'Grouping Tables',
    groupingThreshold: 'Grouping Threshold',
    disableTLSVerification: 'Disable TLS Verification (Global)',
    loadMetaDataWhenExpandTreeView: 'Load Meta Data When Expand Tree View',
  },
  offline: {
    enterprise: 'Obtain a license from your organization.',
    online: 'Log in with your premium account to use on unlimited machines.',
    detail: "Get your Machine Id and go to <a href='https://database-client.com/#/console/license'>Licenses</a> to generate up to 3 offline licenses.",
    getMachineId: 'Get Machine Id',
    activate: 'Activate',
  },
  result: {
    export: 'Export',
    exportToEditor: 'Export To Editor',
    exportOption: 'Export Option',
    importOption: 'Import Option',
    skipPrimaryKey: 'Skip Primary Key',
    editData: 'Edit Data',
    exportType: 'Type',
    exportSQL: 'Output SQL to separate sheet',
    removeLimit: 'Remove Pagination SQL',
    insert: 'Insert',
    update: 'Update',
    confirm: 'Confirm',
    searchField: 'Search Field',
    searchNotice: 'Search Results',
    cost: 'Cost',
    copy: 'Copy',
    paste: 'Paste',
    copyAsMore: 'Copy As ...',
    copyAsCSV: 'Copy As CSV',
    copyAsSQL: 'Copy As SQL',
    copyColumns: 'Copy Values',
    editDialog: 'Edit Row',
    copyDialog: 'Copy Row',
    loadFile: 'Load File...',
    exportData: 'Export Data',
    setNull: 'Set NULL',
    setAsEmptyString: 'Set As Empty String',
    skipForeignCheck: 'Skip foreign key constraint checking',
    filterBy: 'Filter by',
    localFilterBy: 'Local Filter by',
  },
  pay: {
    connectNotice: "<span class='red'>Note</span>: Requires a <a href='https://database-client.com/#/plan'>Premium License</a> to unlock all features. (Limited to 4 connections)",
    notice: 'If this project is helpful to you, please consider purchasing a Premium License to support it.',
    freePlanInstalled: 'Installed',
    buyPlan: 'Buy Now',
  },
  toolbar: {
    showCostTime: 'Cost Time',
    showColumnFilter: 'Column Filter',
    showAggregateBar: 'Aggregate Bar',
    showFilter: 'Show Filter',
    draggableColumns: 'Draggable Columns',
    showRowNumber: 'Show Row Number',
    showControllerColumn: 'Show Controller Column',
    execute: 'Execute SQL',
    insertNewRow: 'Insert New Row',
    insertNewRowByDialog: 'Insert New Row By Dialog',
    importData: 'Import Data',
    exportData: 'Export Data',
    reportIssue: 'Report issue',
    closeAllConnections: 'Close All Connections',
    clearCache: 'Clear Cache',
    payAdvice: 'Premium License will remove this badge',
    noPkUpdateConfirm: "No primary key found, <span class='red'>this change might affect more records than expected!</span> Are you sure you want to continue? (Not Recommended)",
  },
  console: {
    other: 'Other',
    treeOptions: 'TreeView',
    sqlOptions: 'SQL',
    resultOptions: 'Result',
    editorOptions: 'Editor',
    configuration: 'Connection Configuration',
    resetConfig: 'Reset',
    edit: 'Edit',
    export: 'Export',
    import: 'Import',
    sync: 'Cloud Sync',
    autoSync: 'Auto Sync (Via VS Code account)',
    uploadConfirm: 'Do you confirm to upload the configuration?',
    mergeConfirm: 'There is already created connection, select the action you want to perform',
    removeConfirm: 'Are you sure you want to remove cloud sync content?',
    merge: 'Merge',
    overwrite: 'Overwrite',
    upload: 'Upload',
    remove: 'Remove',
    download: 'Download',
  },
  plan: {
    activation: 'Activation',
    perYear: 'Per Year',
    installed: 'Installed',
    free: 'Free',
    about: 'About Project',
    document: 'Document',
    freeTier: 'Free Tier',
    buyNow: 'Buy Now',
    bought: 'Unlocked',
    premiumNotice: 'Only available with Premium license',
    basicNotice: 'Available for commercial usage and no ads.',
    basicSQLCompletion: 'SQL Completion',
    connectionSupport: 'MySQL, PostgreSQL, Redis, SSH, and More',
    premiumDesc: 'For engineers looking to boost productivity',
    otherFeature: 'SFTP Saver, SQL History Support',
    freeLimitConnection: 'Limited to 4 connections',
    unlimitedMachine: 'Unlimited Devices (Via Account)',
    unlimitedConnection: 'Unlimited Connections',
    cloudSync: 'Cloud Config Sync',
    workLevelConnection: 'Workspace Level Connection',
    intelliSenseSQLCompletion: 'More IntelliSense SQL Completion',
  }
}