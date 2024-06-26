from ccxt.base.types import Entry


class ImplicitAPI:
    v1_public_get_public_volume_stats = v1PublicGetPublicVolumeStats = Entry('public/volume/stats', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_broker_name = v1PublicGetPublicBrokerName = Entry('public/broker/name', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_chain_info_broker_id = v1PublicGetPublicChainInfoBrokerId = Entry('public/chain_info/{broker_id}', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_system_info = v1PublicGetPublicSystemInfo = Entry('public/system_info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_vault_balance = v1PublicGetPublicVaultBalance = Entry('public/vault_balance', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_insurancefund = v1PublicGetPublicInsurancefund = Entry('public/insurancefund', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_chain_info = v1PublicGetPublicChainInfo = Entry('public/chain_info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_faucet_usdc = v1PublicGetFaucetUsdc = Entry('faucet/usdc', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_account = v1PublicGetPublicAccount = Entry('public/account', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_get_account = v1PublicGetGetAccount = Entry('get_account', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_registration_nonce = v1PublicGetRegistrationNonce = Entry('registration_nonce', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_get_orderly_key = v1PublicGetGetOrderlyKey = Entry('get_orderly_key', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_liquidation = v1PublicGetPublicLiquidation = Entry('public/liquidation', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_liquidated_positions = v1PublicGetPublicLiquidatedPositions = Entry('public/liquidated_positions', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_config = v1PublicGetPublicConfig = Entry('public/config', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_campaign_ranking = v1PublicGetPublicCampaignRanking = Entry('public/campaign/ranking', ['v1', 'public'], 'GET', {'cost': 10})
    v1_public_get_public_campaign_stats = v1PublicGetPublicCampaignStats = Entry('public/campaign/stats', ['v1', 'public'], 'GET', {'cost': 10})
    v1_public_get_public_campaign_user = v1PublicGetPublicCampaignUser = Entry('public/campaign/user', ['v1', 'public'], 'GET', {'cost': 10})
    v1_public_get_public_campaign_stats_details = v1PublicGetPublicCampaignStatsDetails = Entry('public/campaign/stats/details', ['v1', 'public'], 'GET', {'cost': 10})
    v1_public_get_public_campaigns = v1PublicGetPublicCampaigns = Entry('public/campaigns', ['v1', 'public'], 'GET', {'cost': 10})
    v1_public_get_public_points_leaderboard = v1PublicGetPublicPointsLeaderboard = Entry('public/points/leaderboard', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_client_points = v1PublicGetClientPoints = Entry('client/points', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_points_epoch = v1PublicGetPublicPointsEpoch = Entry('public/points/epoch', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_points_epoch_dates = v1PublicGetPublicPointsEpochDates = Entry('public/points/epoch_dates', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_referral_check_ref_code = v1PublicGetPublicReferralCheckRefCode = Entry('public/referral/check_ref_code', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_referral_verify_ref_code = v1PublicGetPublicReferralVerifyRefCode = Entry('public/referral/verify_ref_code', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_admin_info = v1PublicGetReferralAdminInfo = Entry('referral/admin_info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_info = v1PublicGetReferralInfo = Entry('referral/info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_referee_info = v1PublicGetReferralRefereeInfo = Entry('referral/referee_info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_referee_rebate_summary = v1PublicGetReferralRefereeRebateSummary = Entry('referral/referee_rebate_summary', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_referee_history = v1PublicGetReferralRefereeHistory = Entry('referral/referee_history', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_referral_history = v1PublicGetReferralReferralHistory = Entry('referral/referral_history', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_referral_rebate_summary = v1PublicGetReferralRebateSummary = Entry('referral/rebate_summary', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_client_distribution_history = v1PublicGetClientDistributionHistory = Entry('client/distribution_history', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_tv_config = v1PublicGetTvConfig = Entry('tv/config', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_tv_history = v1PublicGetTvHistory = Entry('tv/history', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_tv_symbol_info = v1PublicGetTvSymbolInfo = Entry('tv/symbol_info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_funding_rate_history = v1PublicGetPublicFundingRateHistory = Entry('public/funding_rate_history', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_funding_rate_symbol = v1PublicGetPublicFundingRateSymbol = Entry('public/funding_rate/{symbol}', ['v1', 'public'], 'GET', {'cost': 0.33})
    v1_public_get_public_funding_rates = v1PublicGetPublicFundingRates = Entry('public/funding_rates', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_info = v1PublicGetPublicInfo = Entry('public/info', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_info_symbol = v1PublicGetPublicInfoSymbol = Entry('public/info/{symbol}', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_market_trades = v1PublicGetPublicMarketTrades = Entry('public/market_trades', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_token = v1PublicGetPublicToken = Entry('public/token', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_futures = v1PublicGetPublicFutures = Entry('public/futures', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_get_public_futures_symbol = v1PublicGetPublicFuturesSymbol = Entry('public/futures/{symbol}', ['v1', 'public'], 'GET', {'cost': 1})
    v1_public_post_register_account = v1PublicPostRegisterAccount = Entry('register_account', ['v1', 'public'], 'POST', {'cost': 1})
    v1_private_get_client_key_info = v1PrivateGetClientKeyInfo = Entry('client/key_info', ['v1', 'private'], 'GET', {'cost': 6})
    v1_private_get_client_orderly_key_ip_restriction = v1PrivateGetClientOrderlyKeyIpRestriction = Entry('client/orderly_key_ip_restriction', ['v1', 'private'], 'GET', {'cost': 6})
    v1_private_get_order_oid = v1PrivateGetOrderOid = Entry('order/{oid}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_client_order_client_order_id = v1PrivateGetClientOrderClientOrderId = Entry('client/order/{client_order_id}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_algo_order_oid = v1PrivateGetAlgoOrderOid = Entry('algo/order/{oid}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_algo_client_order_client_order_id = v1PrivateGetAlgoClientOrderClientOrderId = Entry('algo/client/order/{client_order_id}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_orders = v1PrivateGetOrders = Entry('orders', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_algo_orders = v1PrivateGetAlgoOrders = Entry('algo/orders', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_trade_tid = v1PrivateGetTradeTid = Entry('trade/{tid}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_trades = v1PrivateGetTrades = Entry('trades', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_order_oid_trades = v1PrivateGetOrderOidTrades = Entry('order/{oid}/trades', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_client_liquidator_liquidations = v1PrivateGetClientLiquidatorLiquidations = Entry('client/liquidator_liquidations', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_liquidations = v1PrivateGetLiquidations = Entry('liquidations', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_asset_history = v1PrivateGetAssetHistory = Entry('asset/history', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_client_holding = v1PrivateGetClientHolding = Entry('client/holding', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_withdraw_nonce = v1PrivateGetWithdrawNonce = Entry('withdraw_nonce', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_settle_nonce = v1PrivateGetSettleNonce = Entry('settle_nonce', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_pnl_settlement_history = v1PrivateGetPnlSettlementHistory = Entry('pnl_settlement/history', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_volume_user_daily = v1PrivateGetVolumeUserDaily = Entry('volume/user/daily', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_volume_user_stats = v1PrivateGetVolumeUserStats = Entry('volume/user/stats', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_client_statistics = v1PrivateGetClientStatistics = Entry('client/statistics', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_client_info = v1PrivateGetClientInfo = Entry('client/info', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_client_statistics_daily = v1PrivateGetClientStatisticsDaily = Entry('client/statistics/daily', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_positions = v1PrivateGetPositions = Entry('positions', ['v1', 'private'], 'GET', {'cost': 3.33})
    v1_private_get_position_symbol = v1PrivateGetPositionSymbol = Entry('position/{symbol}', ['v1', 'private'], 'GET', {'cost': 3.33})
    v1_private_get_funding_fee_history = v1PrivateGetFundingFeeHistory = Entry('funding_fee/history', ['v1', 'private'], 'GET', {'cost': 30})
    v1_private_get_notification_inbox_notifications = v1PrivateGetNotificationInboxNotifications = Entry('notification/inbox/notifications', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_notification_inbox_unread = v1PrivateGetNotificationInboxUnread = Entry('notification/inbox/unread', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_volume_broker_daily = v1PrivateGetVolumeBrokerDaily = Entry('volume/broker/daily', ['v1', 'private'], 'GET', {'cost': 60})
    v1_private_get_broker_fee_rate_default = v1PrivateGetBrokerFeeRateDefault = Entry('broker/fee_rate/default', ['v1', 'private'], 'GET', {'cost': 10})
    v1_private_get_broker_user_info = v1PrivateGetBrokerUserInfo = Entry('broker/user_info', ['v1', 'private'], 'GET', {'cost': 10})
    v1_private_get_orderbook_symbol = v1PrivateGetOrderbookSymbol = Entry('orderbook/{symbol}', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_get_kline = v1PrivateGetKline = Entry('kline', ['v1', 'private'], 'GET', {'cost': 1})
    v1_private_post_orderly_key = v1PrivatePostOrderlyKey = Entry('orderly_key', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_client_set_orderly_key_ip_restriction = v1PrivatePostClientSetOrderlyKeyIpRestriction = Entry('client/set_orderly_key_ip_restriction', ['v1', 'private'], 'POST', {'cost': 6})
    v1_private_post_client_reset_orderly_key_ip_restriction = v1PrivatePostClientResetOrderlyKeyIpRestriction = Entry('client/reset_orderly_key_ip_restriction', ['v1', 'private'], 'POST', {'cost': 6})
    v1_private_post_order = v1PrivatePostOrder = Entry('order', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_batch_order = v1PrivatePostBatchOrder = Entry('batch-order', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_algo_order = v1PrivatePostAlgoOrder = Entry('algo/order', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_liquidation = v1PrivatePostLiquidation = Entry('liquidation', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_claim_insurance_fund = v1PrivatePostClaimInsuranceFund = Entry('claim_insurance_fund', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_withdraw_request = v1PrivatePostWithdrawRequest = Entry('withdraw_request', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_settle_pnl = v1PrivatePostSettlePnl = Entry('settle_pnl', ['v1', 'private'], 'POST', {'cost': 1})
    v1_private_post_notification_inbox_mark_read = v1PrivatePostNotificationInboxMarkRead = Entry('notification/inbox/mark_read', ['v1', 'private'], 'POST', {'cost': 60})
    v1_private_post_notification_inbox_mark_read_all = v1PrivatePostNotificationInboxMarkReadAll = Entry('notification/inbox/mark_read_all', ['v1', 'private'], 'POST', {'cost': 60})
    v1_private_post_client_leverage = v1PrivatePostClientLeverage = Entry('client/leverage', ['v1', 'private'], 'POST', {'cost': 120})
    v1_private_post_client_maintenance_config = v1PrivatePostClientMaintenanceConfig = Entry('client/maintenance_config', ['v1', 'private'], 'POST', {'cost': 60})
    v1_private_post_delegate_signer = v1PrivatePostDelegateSigner = Entry('delegate_signer', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_delegate_orderly_key = v1PrivatePostDelegateOrderlyKey = Entry('delegate_orderly_key', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_delegate_settle_pnl = v1PrivatePostDelegateSettlePnl = Entry('delegate_settle_pnl', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_delegate_withdraw_request = v1PrivatePostDelegateWithdrawRequest = Entry('delegate_withdraw_request', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_broker_fee_rate_set = v1PrivatePostBrokerFeeRateSet = Entry('broker/fee_rate/set', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_broker_fee_rate_set_default = v1PrivatePostBrokerFeeRateSetDefault = Entry('broker/fee_rate/set_default', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_broker_fee_rate_default = v1PrivatePostBrokerFeeRateDefault = Entry('broker/fee_rate/default', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_referral_create = v1PrivatePostReferralCreate = Entry('referral/create', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_referral_update = v1PrivatePostReferralUpdate = Entry('referral/update', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_referral_bind = v1PrivatePostReferralBind = Entry('referral/bind', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_post_referral_edit_split = v1PrivatePostReferralEditSplit = Entry('referral/edit_split', ['v1', 'private'], 'POST', {'cost': 10})
    v1_private_put_order = v1PrivatePutOrder = Entry('order', ['v1', 'private'], 'PUT', {'cost': 1})
    v1_private_put_algo_order = v1PrivatePutAlgoOrder = Entry('algo/order', ['v1', 'private'], 'PUT', {'cost': 1})
    v1_private_delete_order = v1PrivateDeleteOrder = Entry('order', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_algo_order = v1PrivateDeleteAlgoOrder = Entry('algo/order', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_client_order = v1PrivateDeleteClientOrder = Entry('client/order', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_algo_client_order = v1PrivateDeleteAlgoClientOrder = Entry('algo/client/order', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_algo_orders = v1PrivateDeleteAlgoOrders = Entry('algo/orders', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_orders = v1PrivateDeleteOrders = Entry('orders', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_batch_order = v1PrivateDeleteBatchOrder = Entry('batch-order', ['v1', 'private'], 'DELETE', {'cost': 1})
    v1_private_delete_client_batch_order = v1PrivateDeleteClientBatchOrder = Entry('client/batch-order', ['v1', 'private'], 'DELETE', {'cost': 1})
