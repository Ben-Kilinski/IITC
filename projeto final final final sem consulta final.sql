--------------------------- SQL PROJECT ------------------------------------------
--select CustStatus
--from customers 

--select custID, status 
--from ExOrders
--where status like 'pendente'

--Select Available
--from Items
--where Available > 10

--select customers.custID, OrderNo
--from Customers join ExOrders 
--on Customers.CustID = ExOrders.CustID

--select ExOrders.OrderNo, TotAmount
--from Invoices join ExOrders
--on ExOrders.OrderNo = Invoices.OrderNo

--select CustID, TotAmountcount(Quant), [status] 
--from ExOrders join Invoices
--on ExOrders.OrderNo = Invoices.OrderNo

--select *
--from ExOrders

--select sum(Quant) as 'unids pendentes'
--from ExOrders 
--where status like 'pendente'

--select sum(Quant) as 'unids enviadas'
--from ExOrders 
--where status like 'enviado'

--select avg(UnitPrice)
--from items 

--select *
--from ExOrders join invoices 
--on ExOrders.OrderNo = Invoices.OrderNo


--SELECT ExOrders.OrderNo,  ExOrders.Date, CustID, Status
--FROM ExOrders JOIN Invoices 
--ON ExOrders.OrderNo = Invoices.OrderNo
--WHERE Invoices.OrderNo IS NULL OR ExOrders.Status != 'enviado';

--SELECT CustID, OrderNo, Status, NextOrder, Expiration
--FROM Subscription
--WHERE Status = 'Ativo'
--AND NextOrder >= GETDATE();

--INSERT INTO Items (Code, [Desc], UnitPrice, Available, Saved, Waiting, Subscript, Freq, SuppDate, OrderPercnt)
--VALUES ('P001', 'Produto Exemplo', 19.99, 100, 10, 5, 20, 30, '2024-09-01', 0.75);

--UPDATE Items
--SET Available = 150
--WHERE Code = 'P001';

--DELETE FROM ExOrders
--WHERE Date < DATEADD(YEAR, -1, GETDATE())
--AND Status != 'Concluído';

--UPDATE Subscription
--SET Status = 'Em Processamento'
--WHERE NextOrder <= GETDATE()
--AND Status = 'Ativo';

