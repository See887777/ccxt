using ccxt;
namespace Tests;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class testMainClass : BaseTest
{
    async static public Task<object> testFetchLedgerEntry(Exchange exchange, object skippedProperties, object code)
    {
        object method = "fetchLedgerEntry";
        object items = await exchange.fetchLedger(code);
        object length = getArrayLength(items);
        testSharedMethods.assertNonEmtpyArray(exchange, skippedProperties, method, items, code);
        if (isTrue(isGreaterThan(length, 0)))
        {
            object firstItem = getValue(items, 0);
            object id = getValue(firstItem, "id");
            object item = await exchange.fetchLedgerEntry(id);
            object now = exchange.milliseconds();
            testLedgerEntry(exchange, skippedProperties, method, item, code, now);
        }
        return true;
    }

}