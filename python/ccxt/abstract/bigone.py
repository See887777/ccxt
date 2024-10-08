from ccxt.base.types import Entry


class ImplicitAPI:
    public_get_ping = publicGetPing = Entry('ping', 'public', 'GET', {})
    public_get_asset_pairs = publicGetAssetPairs = Entry('asset_pairs', 'public', 'GET', {})
    public_get_asset_pairs_asset_pair_name_depth = publicGetAssetPairsAssetPairNameDepth = Entry('asset_pairs/{asset_pair_name}/depth', 'public', 'GET', {})
    public_get_asset_pairs_asset_pair_name_trades = publicGetAssetPairsAssetPairNameTrades = Entry('asset_pairs/{asset_pair_name}/trades', 'public', 'GET', {})
    public_get_asset_pairs_asset_pair_name_ticker = publicGetAssetPairsAssetPairNameTicker = Entry('asset_pairs/{asset_pair_name}/ticker', 'public', 'GET', {})
    public_get_asset_pairs_asset_pair_name_candles = publicGetAssetPairsAssetPairNameCandles = Entry('asset_pairs/{asset_pair_name}/candles', 'public', 'GET', {})
    public_get_asset_pairs_tickers = publicGetAssetPairsTickers = Entry('asset_pairs/tickers', 'public', 'GET', {})
    private_get_accounts = privateGetAccounts = Entry('accounts', 'private', 'GET', {})
    private_get_fund_accounts = privateGetFundAccounts = Entry('fund/accounts', 'private', 'GET', {})
    private_get_assets_asset_symbol_address = privateGetAssetsAssetSymbolAddress = Entry('assets/{asset_symbol}/address', 'private', 'GET', {})
    private_get_orders = privateGetOrders = Entry('orders', 'private', 'GET', {})
    private_get_orders_id = privateGetOrdersId = Entry('orders/{id}', 'private', 'GET', {})
    private_get_orders_multi = privateGetOrdersMulti = Entry('orders/multi', 'private', 'GET', {})
    private_get_trades = privateGetTrades = Entry('trades', 'private', 'GET', {})
    private_get_withdrawals = privateGetWithdrawals = Entry('withdrawals', 'private', 'GET', {})
    private_get_deposits = privateGetDeposits = Entry('deposits', 'private', 'GET', {})
    private_post_orders = privatePostOrders = Entry('orders', 'private', 'POST', {})
    private_post_orders_id_cancel = privatePostOrdersIdCancel = Entry('orders/{id}/cancel', 'private', 'POST', {})
    private_post_orders_cancel = privatePostOrdersCancel = Entry('orders/cancel', 'private', 'POST', {})
    private_post_withdrawals = privatePostWithdrawals = Entry('withdrawals', 'private', 'POST', {})
    private_post_transfer = privatePostTransfer = Entry('transfer', 'private', 'POST', {})
    contractpublic_get_symbols = contractPublicGetSymbols = Entry('symbols', 'contractPublic', 'GET', {})
    contractpublic_get_instruments = contractPublicGetInstruments = Entry('instruments', 'contractPublic', 'GET', {})
    contractpublic_get_depth_symbol_snapshot = contractPublicGetDepthSymbolSnapshot = Entry('depth@{symbol}/snapshot', 'contractPublic', 'GET', {})
    contractpublic_get_instruments_difference = contractPublicGetInstrumentsDifference = Entry('instruments/difference', 'contractPublic', 'GET', {})
    contractpublic_get_instruments_prices = contractPublicGetInstrumentsPrices = Entry('instruments/prices', 'contractPublic', 'GET', {})
    contractprivate_get_accounts = contractPrivateGetAccounts = Entry('accounts', 'contractPrivate', 'GET', {})
    contractprivate_get_orders_id = contractPrivateGetOrdersId = Entry('orders/{id}', 'contractPrivate', 'GET', {})
    contractprivate_get_orders = contractPrivateGetOrders = Entry('orders', 'contractPrivate', 'GET', {})
    contractprivate_get_orders_opening = contractPrivateGetOrdersOpening = Entry('orders/opening', 'contractPrivate', 'GET', {})
    contractprivate_get_orders_count = contractPrivateGetOrdersCount = Entry('orders/count', 'contractPrivate', 'GET', {})
    contractprivate_get_orders_opening_count = contractPrivateGetOrdersOpeningCount = Entry('orders/opening/count', 'contractPrivate', 'GET', {})
    contractprivate_get_trades = contractPrivateGetTrades = Entry('trades', 'contractPrivate', 'GET', {})
    contractprivate_get_trades_count = contractPrivateGetTradesCount = Entry('trades/count', 'contractPrivate', 'GET', {})
    contractprivate_post_orders = contractPrivatePostOrders = Entry('orders', 'contractPrivate', 'POST', {})
    contractprivate_post_orders_batch = contractPrivatePostOrdersBatch = Entry('orders/batch', 'contractPrivate', 'POST', {})
    contractprivate_put_positions_symbol_margin = contractPrivatePutPositionsSymbolMargin = Entry('positions/{symbol}/margin', 'contractPrivate', 'PUT', {})
    contractprivate_put_positions_symbol_risk_limit = contractPrivatePutPositionsSymbolRiskLimit = Entry('positions/{symbol}/risk-limit', 'contractPrivate', 'PUT', {})
    contractprivate_delete_orders_id = contractPrivateDeleteOrdersId = Entry('orders/{id}', 'contractPrivate', 'DELETE', {})
    contractprivate_delete_orders_batch = contractPrivateDeleteOrdersBatch = Entry('orders/batch', 'contractPrivate', 'DELETE', {})
    webexchange_get_v3_assets = webExchangeGetV3Assets = Entry('v3/assets', 'webExchange', 'GET', {})
