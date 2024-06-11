export default {
  confirm: {
    warning: '警告',
    updateConfirm: '确认更新',
    deleteSelected: '确定要删除选定的数据吗？',
    deleteSelectedWithoutPk: '确定要删除选定的数据吗？未找到主键，此更改可能会影响到比预期更多的记录！',
    deleteForward: '确定要删除此端口转发吗？',
    deleteRedisKey: '确定要删除此键吗？',
  },
  common: {
    new: '新建',
    copied: '已复制!',
    create: '创建',
    cancel: '取消',
    ok: '确定',
    refresh: '刷新',
    update: '更新',
    choose: '选择',
    close: '关闭',
    name: '名称',
    type: '类型',
    comment: '注释',
    default: '默认值',
    readonly: '这个连接是只读的!',
  },
  state: {
    viewType: '视图类型:',
    rowHeight: '行高:',
    fontSize: '字体大小:',
    textAlign: '文本对齐:',
    borderType: '边框:',
    showComment: '显示注释:',
    columnConfig: '列配置',
    columnWidth: '列宽:',
    columnMaximumWidth: '列最大宽度:',
  },
  notice: {
    copySuccess: '复制成功!'
  },
  design: {
    table: '表名',
    engine: '引擎',
    collate: '字符集',
    check: '检查约束',
    clause: '检查子句',
    operation: '操作',
    newIndex: '新建索引',
    newCheck: '新建约束',
    newForeignKey: '新建外键',
    newColumn: '新建列',
    updateColumn: '更新列',
    column: '列',
    foreignKey: '外键',
    length: '长度',
    isPrimary: '主键',
    isUnique: '唯一',
    isAutoIncrement: '自增',
    isNotNull: '不可为NULL',
    referencedTable: '关联表',
    referencedColumn: '关联列',
    index: '索引',
    indexName: '索引名',
    indexMethod: '索引方法',
    unique: '唯一约束',
    foreignKeyName: '外键名',
    constraintName: '约束名',
    updateRule: '更新规则',
    deleteRule: '删除规则',
    ddl: 'DDL',
    deleteColumnConfirm: '你确定要删除该列吗?',
    deleteIndexConfirm: '你确定要删除该索引吗?',
    deleteCheckConfirm: '你确定要删除该约束吗?',
    deleteFkConfirm: '你确定要删除该外键吗?',
    updateSuccess: '更新成功!',
  },
  table: {
    data: '数据',
    design: '属性',
    process: '进程',
    monitor: '监控',
    erDiagram: 'ER 图',
  },
  sshStatus: {
    systemInfo: '系统信息',
    cpuInfo: 'CPU信息',
    cpuName: '名称',
    cpuClock: '频率',
    cpuCoreCount: '逻辑核心数',
    hostname: '主机名',
    os: '操作系统',
    arch: '架构',
    runTime: '运行时间',
    kernelVersion: '内核版本',
    systemStatus: '系统状态',
    memory: '内存',
    disk: '磁盘',
    network: '网络',
  },
  util: {
    common: '通用',
    translate: '翻译',
    img2Base64: '图片转Base64',
    qrcode: '二维码识别',
  },
  global: {
    changeLog: '更新日志',
    document: '文档',
    util: '工具',
    settings: '设置',
    plan: '计划',
    login: '登录',
    logout: '注销',
  },
  connect: {
    dm: '达梦',
    use: '使用',
    title: '连接至服务',
    name: '名称',
    connectionName: '连接名称',
    group: '分组',
    groupPlaceholder: '级别1/级别2',
    readOnly: '只读',
    savePassword: '保存密码',
    savePasswordForever: '是',
    savePasswordNever: '否',
    scope: '作用范围',
    option: '选项',
    success: '成功!',
    error: '连接出错!',
    global: '全局',
    current: '工作空间',
    connecting: '连接',
    socketPath: 'Socket路径',
    connectionType: '连接类型',
    save: '保存',
    enable: '启用',
    main: '主要',
    sshTunnel: 'SSH隧道',
    socksProxy: 'Socks代理',
    httpProxy: 'HTTP代理',
    connectTimeout: '超时时间(ms)',
    requestTimeout: '请求超时',
    hideSystemSchema: '隐藏系统数据库',
    connectString: '连接字符串',
    usingConnectString: '使用连接字符串',
    chooseSqlite: '选择数据库文件',
    advance: '高级',
    algorithm: '算法配置',
    ftpEncoding: '编码',
    protocol: '协议',
    coLatestVersion: '最新版本',
    pruneSFTPRoot: '修剪根路径',
    showHiddenFiles: '显示隐藏文件',
    mongoNotice: 'MongoDB只有少量的支持, 且不积极维护, 只推荐用于浏览数据.',
    s3Notice: '支持连接到任意兼容s3协议的服务, 例如阿里云对象存储OSS.',
    hasDockerNotice: '已安装Docker, 你可通过连接按钮直接连接.',
  },
  treeFeature: {
    type: '类型',
    event: '事件',
    sequence: '序列',
    foreignTable: '外部表',
    materializedView: '物化视图',
  },
  ssh: {
    util: '工具',
    theme: '主题',
    shell: '打开终端后要执行的Shell.',
    portForward: {
      local: '从远程服务器转发目标地址到本地。',
      remote: '将本地地址转发到远程服务器。',
      dynamic: '使用远程服务器创建本地socks代理。',
    }
  },
  config: {
    plain: '配置',
    features: '特性',
    sslConfig: 'SSL配置',
    usingCustomDatabaseName: '使用自定义数据库名',
    serverType: '服务类型',
    more: '更多',
    host: '主机名',
    port: '端口',
    account: '账号',
    username: '用户名',
    password: '密码',
    passphrase: '密钥短语',
    key: '密钥',
    auto: '自动',
    privateKeyAndPassword: '私钥和密码',
    database: '数据库',
    databaseNumber: '数据库数量',
    dbPath: '数据库路径',
    mongoAuthSource: '认证数据库',
    databasePlaceholder: '目标数据库',
    dialect: '方言',
    driverName: '驱动名',
    driverPath: '驱动路径',
    showedBuckets: '显示的Buckets',
    showedDatabases: '显示的数据库',
    privateKeyPath: '私钥路径',
    timeZone: '时区',
    groupingTables: '分组表',
    groupingThreshold: '分组阈值',
  },
  offline: {
    enterprise: '从你的组织获取许可证.',
    online: '登录你的premium账号即可, 无机器数量限制.',
    detail: "获取机器码并前往<a href='https://database-client.com/#/console/license'>License</a>生成, 每个账号最多获取3个离线激活码.",
    getMachineId: '获取机器码',
    activate: '激活',
  },
  result: {
    export: '导出',
    exportToEditor: '导出到编辑器',
    exportOption: '导出选项',
    importExternal: '导入外部数据',
    editData: '编辑数据',
    exportType: '类型',
    exportSQL: '输出SQL到单独的表',
    removeLimit: '移除分页SQL',
    insert: '保存',
    update: '更新',
    confirm: '确认',
    searchNotice: '搜索结果集',
    cost: '耗时',
    copy: '复制',
    copyAsMore: '复制为...',
    copyAsCSV: '复制为CSV',
    copyAsSQL: '复制为SQL',
    copyColumns: '复制整列',
    editDialog: '编辑行',
    copyDialog: '复制行',
    setNull: '设置为NULL',
    skipForeignCheck: '跳过外键约束检查',
  },
  pay: {
    connectNotice: "<span class='red'>注意</span>: 扩展需要<a href='https://database-client.com/#/plan'>付费</a>才能使用全部功能(3个连接限制).",
    notice: '如果此项目对你有帮助, 请考虑付费进行支持. ',
    freePlanInstalled: '已安装',
    buyPlan: '立刻购买',
  },
  toolbar: {
    showFilter: '显示过滤器',
    execute: '执行SQL',
    insertNewRow: '插入新行',
    insertNewRowByDialog: '通过对话框插入新行',
    importData: '导入数据',
    exportData: '导出数据',
    reportIssue: '报告问题',
    clearCache: '清除缓存',
    payAdvice: '高级用户将移除这个提示',
    noPkUpdateConfirm: "没有发现主键, <span class='red'>此更改可能会影响比预期更多的记录!</span> 您确定保存修改吗(不建议)?",
  },
  console: {
    other: '其他',
    treeOptions: '树视图',
    sqlOptions: 'SQL',
    resultOptions: '结果页',
    editorOptions: '编辑器',
    configuration: '连接配置',
    resetConfig: '重置',
    edit: '编辑',
    export: '导出',
    import: '导入',
    sync: '云同步',
    autoSync: '自动同步 (通过VS Code账号)',
    uploadConfirm: '你确定要上传配置吗?',
    mergeConfirm: '存在已创建的连接, 请选择你要执行的操作',
    removeConfirm: '你确定要删除云同步内容吗?',
    merge: '合并',
    overwrite: '覆盖',
    upload: '上传',
    remove: '删除',
    download: '下载',
  },
  plan: {
    activation: '激活',
    installed: '已安装',
    perYear: '每年',
    free: '免费',
    about: '关于本项目',
    document: '文档',
    freeTier: '免费试用',
    buyNow: '购买',
    bought: '已解锁',
    premiumNotice: '只对Premium许可开放',
    basicNotice: '可用于商业用途以及无广告',
    basicSQLCompletion: 'SQL补全',
    connectionSupport: 'MySQL, PostgreSQL, Redis, SSH以及更多',
    premiumDesc: '对于希望提高生产力的开发工程师',
    otherFeature: 'SFTP保存, SQL历史记录支持',
    freeLimitConnection: '限制3个连接',
    unlimitedMachine: '无限制机器数量 (账号登录)',
    unlimitedConnection: '无限制的连接',
    cloudSync: '设置云同步',
    workLevelConnection: '工作空间级别的连接',
    intelliSenseSQLCompletion: '更加智能的SQL补全',
  }
}