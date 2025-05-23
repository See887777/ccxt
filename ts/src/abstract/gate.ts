// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    publicWalletGetCurrencyChains (params?: {}): Promise<implicitReturnType>;
    publicSpotGetCurrencies (params?: {}): Promise<implicitReturnType>;
    publicSpotGetCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    publicSpotGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    publicSpotGetCurrencyPairsCurrencyPair (params?: {}): Promise<implicitReturnType>;
    publicSpotGetTickers (params?: {}): Promise<implicitReturnType>;
    publicSpotGetOrderBook (params?: {}): Promise<implicitReturnType>;
    publicSpotGetTrades (params?: {}): Promise<implicitReturnType>;
    publicSpotGetCandlesticks (params?: {}): Promise<implicitReturnType>;
    publicSpotGetTime (params?: {}): Promise<implicitReturnType>;
    publicMarginGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    publicMarginGetCurrencyPairsCurrencyPair (params?: {}): Promise<implicitReturnType>;
    publicMarginGetFundingBook (params?: {}): Promise<implicitReturnType>;
    publicMarginGetCrossCurrencies (params?: {}): Promise<implicitReturnType>;
    publicMarginGetCrossCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    publicMarginGetUniCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    publicMarginGetUniCurrencyPairsCurrencyPair (params?: {}): Promise<implicitReturnType>;
    publicFlash_swapGetCurrencies (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleContracts (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleContractsContract (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleOrderBook (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleTrades (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleCandlesticks (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettlePremiumIndex (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleTickers (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleFundingRate (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleInsurance (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleContractStats (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleIndexConstituentsIndex (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleLiqOrders (params?: {}): Promise<implicitReturnType>;
    publicFuturesGetSettleRiskLimitTiers (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleContracts (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleContractsContract (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleOrderBook (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleTrades (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleCandlesticks (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleTickers (params?: {}): Promise<implicitReturnType>;
    publicDeliveryGetSettleInsurance (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetUnderlyings (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetExpirations (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetContracts (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetContractsContract (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetSettlements (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetSettlementsContract (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetOrderBook (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetTickers (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetUnderlyingTickersUnderlying (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetCandlesticks (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetUnderlyingCandlesticks (params?: {}): Promise<implicitReturnType>;
    publicOptionsGetTrades (params?: {}): Promise<implicitReturnType>;
    publicEarnGetUniCurrencies (params?: {}): Promise<implicitReturnType>;
    publicEarnGetUniCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    privateWithdrawalsPostWithdrawals (params?: {}): Promise<implicitReturnType>;
    privateWithdrawalsPostPush (params?: {}): Promise<implicitReturnType>;
    privateWithdrawalsDeleteWithdrawalsWithdrawalId (params?: {}): Promise<implicitReturnType>;
    privateWalletGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    privateWalletGetWithdrawals (params?: {}): Promise<implicitReturnType>;
    privateWalletGetDeposits (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSubAccountTransfers (params?: {}): Promise<implicitReturnType>;
    privateWalletGetOrderStatus (params?: {}): Promise<implicitReturnType>;
    privateWalletGetWithdrawStatus (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSubAccountBalances (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSubAccountMarginBalances (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSubAccountFuturesBalances (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSubAccountCrossMarginBalances (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSavedAddress (params?: {}): Promise<implicitReturnType>;
    privateWalletGetFee (params?: {}): Promise<implicitReturnType>;
    privateWalletGetTotalBalance (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSmallBalance (params?: {}): Promise<implicitReturnType>;
    privateWalletGetSmallBalanceHistory (params?: {}): Promise<implicitReturnType>;
    privateWalletGetPush (params?: {}): Promise<implicitReturnType>;
    privateWalletPostTransfers (params?: {}): Promise<implicitReturnType>;
    privateWalletPostSubAccountTransfers (params?: {}): Promise<implicitReturnType>;
    privateWalletPostSubAccountToSubAccount (params?: {}): Promise<implicitReturnType>;
    privateWalletPostSmallBalance (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsGetSubAccounts (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsGetSubAccountsUserId (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsGetSubAccountsUserIdKeys (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsGetSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsPostSubAccounts (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsPostSubAccountsUserIdKeys (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsPostSubAccountsUserIdLock (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsPostSubAccountsUserIdUnlock (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsPutSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    privateSubAccountsDeleteSubAccountsUserIdKeysKey (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetAccounts (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetAccountMode (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetBorrowable (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetTransferable (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetLoans (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetLoanRecords (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetInterestRecords (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetEstimateRate (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetCurrencyDiscountTiers (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetRiskUnits (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetUnifiedMode (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetLoanMarginTiers (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetLeverageUserCurrencyConfig (params?: {}): Promise<implicitReturnType>;
    privateUnifiedGetLeverageUserCurrencySetting (params?: {}): Promise<implicitReturnType>;
    privateUnifiedPostAccountMode (params?: {}): Promise<implicitReturnType>;
    privateUnifiedPostLoans (params?: {}): Promise<implicitReturnType>;
    privateUnifiedPostPortfolioCalculator (params?: {}): Promise<implicitReturnType>;
    privateUnifiedPostLeverageUserCurrencySetting (params?: {}): Promise<implicitReturnType>;
    privateUnifiedPutUnifiedMode (params?: {}): Promise<implicitReturnType>;
    privateSpotGetFee (params?: {}): Promise<implicitReturnType>;
    privateSpotGetBatchFee (params?: {}): Promise<implicitReturnType>;
    privateSpotGetAccounts (params?: {}): Promise<implicitReturnType>;
    privateSpotGetAccountBook (params?: {}): Promise<implicitReturnType>;
    privateSpotGetOpenOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotGetOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateSpotGetMyTrades (params?: {}): Promise<implicitReturnType>;
    privateSpotGetPriceOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotGetPriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateSpotPostBatchOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotPostCrossLiquidateOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotPostOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotPostCancelBatchOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotPostCountdownCancelAll (params?: {}): Promise<implicitReturnType>;
    privateSpotPostAmendBatchOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotPostPriceOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotDeleteOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateSpotDeletePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateSpotDeletePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateSpotPatchOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateMarginGetAccounts (params?: {}): Promise<implicitReturnType>;
    privateMarginGetAccountBook (params?: {}): Promise<implicitReturnType>;
    privateMarginGetFundingAccounts (params?: {}): Promise<implicitReturnType>;
    privateMarginGetAutoRepay (params?: {}): Promise<implicitReturnType>;
    privateMarginGetTransferable (params?: {}): Promise<implicitReturnType>;
    privateMarginGetLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginGetLoansLoanId (params?: {}): Promise<implicitReturnType>;
    privateMarginGetLoansLoanIdRepayment (params?: {}): Promise<implicitReturnType>;
    privateMarginGetLoanRecords (params?: {}): Promise<implicitReturnType>;
    privateMarginGetLoanRecordsLoanRecordId (params?: {}): Promise<implicitReturnType>;
    privateMarginGetBorrowable (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossAccounts (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossAccountBook (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossLoansLoanId (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossRepayments (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossInterestRecords (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossTransferable (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossEstimateRate (params?: {}): Promise<implicitReturnType>;
    privateMarginGetCrossBorrowable (params?: {}): Promise<implicitReturnType>;
    privateMarginGetUniEstimateRate (params?: {}): Promise<implicitReturnType>;
    privateMarginGetUniLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginGetUniLoanRecords (params?: {}): Promise<implicitReturnType>;
    privateMarginGetUniInterestRecords (params?: {}): Promise<implicitReturnType>;
    privateMarginGetUniBorrowable (params?: {}): Promise<implicitReturnType>;
    privateMarginPostAutoRepay (params?: {}): Promise<implicitReturnType>;
    privateMarginPostLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginPostMergedLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginPostLoansLoanIdRepayment (params?: {}): Promise<implicitReturnType>;
    privateMarginPostCrossLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginPostCrossRepayments (params?: {}): Promise<implicitReturnType>;
    privateMarginPostUniLoans (params?: {}): Promise<implicitReturnType>;
    privateMarginPatchLoansLoanId (params?: {}): Promise<implicitReturnType>;
    privateMarginPatchLoanRecordsLoanRecordId (params?: {}): Promise<implicitReturnType>;
    privateMarginDeleteLoansLoanId (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapGetCurrencies (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapGetOrders (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapPostOrders (params?: {}): Promise<implicitReturnType>;
    privateFlash_swapPostOrdersPreview (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleAccounts (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleAccountBook (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettlePositions (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettlePositionsContract (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleDualCompPositionsContract (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleOrdersTimerange (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleMyTrades (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleMyTradesTimerange (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettlePositionClose (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleLiquidates (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleAutoDeleverages (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleFee (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettleRiskLimitTiers (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesGetSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettlePositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettlePositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettlePositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleDualMode (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleDualCompPositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleDualCompPositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleDualCompPositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleBatchOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleCountdownCancelAll (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettleBatchCancelOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesPostSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesPutSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateFuturesDeleteSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesDeleteSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateFuturesDeleteSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateFuturesDeleteSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleAccounts (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleAccountBook (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettlePositions (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettlePositionsContract (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleMyTrades (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettlePositionClose (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleLiquidates (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettleSettlements (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryGetSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateDeliveryPostSettlePositionsContractMargin (params?: {}): Promise<implicitReturnType>;
    privateDeliveryPostSettlePositionsContractLeverage (params?: {}): Promise<implicitReturnType>;
    privateDeliveryPostSettlePositionsContractRiskLimit (params?: {}): Promise<implicitReturnType>;
    privateDeliveryPostSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryPostSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryDeleteSettleOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryDeleteSettleOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateDeliveryDeleteSettlePriceOrders (params?: {}): Promise<implicitReturnType>;
    privateDeliveryDeleteSettlePriceOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetMySettlements (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetAccounts (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetAccountBook (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetPositions (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetPositionsContract (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetPositionClose (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetOrders (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetMyTrades (params?: {}): Promise<implicitReturnType>;
    privateOptionsGetMmp (params?: {}): Promise<implicitReturnType>;
    privateOptionsPostOrders (params?: {}): Promise<implicitReturnType>;
    privateOptionsPostCountdownCancelAll (params?: {}): Promise<implicitReturnType>;
    privateOptionsPostMmp (params?: {}): Promise<implicitReturnType>;
    privateOptionsPostMmpReset (params?: {}): Promise<implicitReturnType>;
    privateOptionsDeleteOrders (params?: {}): Promise<implicitReturnType>;
    privateOptionsDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniCurrencies (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniCurrenciesCurrency (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniLends (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniLendRecords (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniInterestsCurrency (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniInterestRecords (params?: {}): Promise<implicitReturnType>;
    privateEarnGetUniInterestStatusCurrency (params?: {}): Promise<implicitReturnType>;
    privateEarnPostUniLends (params?: {}): Promise<implicitReturnType>;
    privateEarnPutUniInterestReinvest (params?: {}): Promise<implicitReturnType>;
    privateEarnPatchUniLends (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralOrders (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralRepayRecords (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralCollaterals (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralTotalAmount (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralLtv (params?: {}): Promise<implicitReturnType>;
    privateLoanGetCollateralCurrencies (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralOrders (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralRepay (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralMortgage (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralCurrencyQuota (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralCurrencies (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralLtv (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralFixedRate (params?: {}): Promise<implicitReturnType>;
    privateLoanGetMultiCollateralCurrentRate (params?: {}): Promise<implicitReturnType>;
    privateLoanPostCollateralOrders (params?: {}): Promise<implicitReturnType>;
    privateLoanPostCollateralRepay (params?: {}): Promise<implicitReturnType>;
    privateLoanPostCollateralCollaterals (params?: {}): Promise<implicitReturnType>;
    privateLoanPostMultiCollateralOrders (params?: {}): Promise<implicitReturnType>;
    privateLoanPostMultiCollateralRepay (params?: {}): Promise<implicitReturnType>;
    privateLoanPostMultiCollateralMortgage (params?: {}): Promise<implicitReturnType>;
    privateAccountGetDetail (params?: {}): Promise<implicitReturnType>;
    privateAccountGetRateLimit (params?: {}): Promise<implicitReturnType>;
    privateAccountGetStpGroups (params?: {}): Promise<implicitReturnType>;
    privateAccountGetStpGroupsStpIdUsers (params?: {}): Promise<implicitReturnType>;
    privateAccountGetStpGroupsDebitFee (params?: {}): Promise<implicitReturnType>;
    privateAccountPostStpGroups (params?: {}): Promise<implicitReturnType>;
    privateAccountPostStpGroupsStpIdUsers (params?: {}): Promise<implicitReturnType>;
    privateAccountDeleteStpGroupsStpIdUsers (params?: {}): Promise<implicitReturnType>;
    privateRebateGetAgencyTransactionHistory (params?: {}): Promise<implicitReturnType>;
    privateRebateGetAgencyCommissionHistory (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange
