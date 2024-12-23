USE [master]
GO
/****** Object:  Database [JonasBrothers@TractorsCIA]    Script Date: 20/08/2024 09:07:20 ******/
CREATE DATABASE [JonasBrothers@TractorsCIA]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'JonasBrothers@TractorsCIA', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\JonasBrothers@TractorsCIA.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'JonasBrothers@TractorsCIA_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\JonasBrothers@TractorsCIA_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [JonasBrothers@TractorsCIA].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ARITHABORT OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET  ENABLE_BROKER 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET RECOVERY FULL 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET  MULTI_USER 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET DB_CHAINING OFF 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'JonasBrothers@TractorsCIA', N'ON'
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET QUERY_STORE = ON
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [JonasBrothers@TractorsCIA]
GO
/****** Object:  Table [dbo].[Accounting]    Script Date: 20/08/2024 09:07:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounting](
	[Date] [date] NULL,
	[Amount] [decimal](10, 2) NULL,
	[CrdtDebt] [nvarchar](20) NULL,
	[InvNo] [nvarchar](10) NULL,
	[OrderNo] [nvarchar](10) NULL,
	[ReceiptNo] [nvarchar](10) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 20/08/2024 09:07:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustID] [bigint] NOT NULL,
	[CustType] [nvarchar](20) NULL,
	[CustStatus] [nvarchar](20) NULL,
	[FreezCode] [nvarchar](20) NULL,
	[OverCount] [int] NULL,
	[CustName] [nvarchar](50) NULL,
	[DelivAddrss] [nvarchar](100) NULL,
	[MailAddrss] [nvarchar](100) NULL,
	[CreditCard] [nvarchar](20) NULL,
	[userName] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[CustID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryFees]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryFees](
	[Delivery] [nvarchar](10) NOT NULL,
	[Desc] [nvarchar](50) NULL,
	[DelFee] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[Delivery] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discounts]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discounts](
	[CustType] [nvarchar](20) NOT NULL,
	[Discnt] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CustType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ExOrders]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExOrders](
	[Date] [date] NULL,
	[OrderNo] [nvarchar](10) NOT NULL,
	[CustID] [bigint] NULL,
	[Code] [nvarchar](10) NULL,
	[Quant] [int] NULL,
	[Delivery] [nvarchar](10) NULL,
	[Address] [nvarchar](100) NULL,
	[Status] [nvarchar](20) NULL,
	[SuppDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoices]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoices](
	[Date] [date] NULL,
	[OrderNo] [nvarchar](10) NULL,
	[UnitDesc] [nvarchar](50) NULL,
	[NoUnits] [int] NULL,
	[UnitPrice] [decimal](10, 2) NULL,
	[InvNo] [nvarchar](10) NOT NULL,
	[TotAmount] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[InvNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Items]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Items](
	[Code] [nvarchar](10) NOT NULL,
	[Desc] [nvarchar](50) NULL,
	[UnitPrice] [decimal](10, 2) NULL,
	[Available] [int] NULL,
	[Saved] [int] NULL,
	[Waiting] [int] NULL,
	[Subscript] [int] NULL,
	[Freq] [int] NULL,
	[SuppDate] [date] NULL,
	[OrderPercnt] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Numbers]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Numbers](
	[LastOrder] [int] NULL,
	[LastSubsc] [int] NULL,
	[LastStock] [int] NULL,
	[LastReciept] [int] NULL,
	[LastInvoice] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profiles]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profiles](
	[Profile] [nvarchar](20) NOT NULL,
	[Act] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Profile] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipts]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipts](
	[PymtDate] [date] NULL,
	[RecNo] [nvarchar](10) NOT NULL,
	[InvNo] [nvarchar](10) NULL,
	[OrderNo] [nvarchar](10) NULL,
	[PaidAmt] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[RecNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StockOrder]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StockOrder](
	[OrderNo] [nvarchar](10) NOT NULL,
	[StockDate] [date] NULL,
	[Code] [nvarchar](10) NULL,
	[Descr] [nvarchar](50) NULL,
	[Quant] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Subscription]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subscription](
	[OrderNo] [nvarchar](10) NULL,
	[Status] [nvarchar](20) NULL,
	[CustID] [bigint] NULL,
	[Code] [nvarchar](10) NULL,
	[Quant] [int] NULL,
	[Freq] [int] NULL,
	[Delivery] [nvarchar](10) NULL,
	[NextOrder] [date] NULL,
	[Expiration] [date] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 20/08/2024 09:07:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserName] [nvarchar](50) NOT NULL,
	[Profile] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Accounting]  WITH CHECK ADD  CONSTRAINT [FK_Accounting_OrderNo] FOREIGN KEY([OrderNo])
REFERENCES [dbo].[ExOrders] ([OrderNo])
GO
ALTER TABLE [dbo].[Accounting] CHECK CONSTRAINT [FK_Accounting_OrderNo]
GO
ALTER TABLE [dbo].[Customers]  WITH CHECK ADD  CONSTRAINT [FK_Customers_Discounts_CustType] FOREIGN KEY([CustType])
REFERENCES [dbo].[Discounts] ([CustType])
GO
ALTER TABLE [dbo].[Customers] CHECK CONSTRAINT [FK_Customers_Discounts_CustType]
GO
ALTER TABLE [dbo].[ExOrders]  WITH CHECK ADD  CONSTRAINT [FK_ExOrders_Code] FOREIGN KEY([Code])
REFERENCES [dbo].[Items] ([Code])
GO
ALTER TABLE [dbo].[ExOrders] CHECK CONSTRAINT [FK_ExOrders_Code]
GO
ALTER TABLE [dbo].[ExOrders]  WITH CHECK ADD  CONSTRAINT [FK_ExOrders_Customers] FOREIGN KEY([CustID])
REFERENCES [dbo].[Customers] ([CustID])
GO
ALTER TABLE [dbo].[ExOrders] CHECK CONSTRAINT [FK_ExOrders_Customers]
GO
ALTER TABLE [dbo].[ExOrders]  WITH CHECK ADD  CONSTRAINT [FK_ExOrders_DeliveryFees] FOREIGN KEY([Delivery])
REFERENCES [dbo].[DeliveryFees] ([Delivery])
GO
ALTER TABLE [dbo].[ExOrders] CHECK CONSTRAINT [FK_ExOrders_DeliveryFees]
GO
ALTER TABLE [dbo].[Invoices]  WITH CHECK ADD  CONSTRAINT [FK_Invoices_ExOrders] FOREIGN KEY([OrderNo])
REFERENCES [dbo].[ExOrders] ([OrderNo])
GO
ALTER TABLE [dbo].[Invoices] CHECK CONSTRAINT [FK_Invoices_ExOrders]
GO
ALTER TABLE [dbo].[StockOrder]  WITH CHECK ADD  CONSTRAINT [FK_StockOrder_Items] FOREIGN KEY([Code])
REFERENCES [dbo].[Items] ([Code])
GO
ALTER TABLE [dbo].[StockOrder] CHECK CONSTRAINT [FK_StockOrder_Items]
GO
ALTER TABLE [dbo].[StockOrder]  WITH CHECK ADD  CONSTRAINT [FK_StockOrder_OrderNo] FOREIGN KEY([OrderNo])
REFERENCES [dbo].[ExOrders] ([OrderNo])
GO
ALTER TABLE [dbo].[StockOrder] CHECK CONSTRAINT [FK_StockOrder_OrderNo]
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD  CONSTRAINT [FK_Subscription_Customers] FOREIGN KEY([CustID])
REFERENCES [dbo].[Customers] ([CustID])
GO
ALTER TABLE [dbo].[Subscription] CHECK CONSTRAINT [FK_Subscription_Customers]
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD  CONSTRAINT [FK_Subscription_DeliveryFees] FOREIGN KEY([Delivery])
REFERENCES [dbo].[DeliveryFees] ([Delivery])
GO
ALTER TABLE [dbo].[Subscription] CHECK CONSTRAINT [FK_Subscription_DeliveryFees]
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD  CONSTRAINT [FK_Subscription_ExOrders] FOREIGN KEY([OrderNo])
REFERENCES [dbo].[ExOrders] ([OrderNo])
GO
ALTER TABLE [dbo].[Subscription] CHECK CONSTRAINT [FK_Subscription_ExOrders]
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD  CONSTRAINT [FK_Subscription_Items] FOREIGN KEY([Code])
REFERENCES [dbo].[Items] ([Code])
GO
ALTER TABLE [dbo].[Subscription] CHECK CONSTRAINT [FK_Subscription_Items]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Profiles] FOREIGN KEY([Profile])
REFERENCES [dbo].[Profiles] ([Profile])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Profiles]
GO
USE [master]
GO
ALTER DATABASE [JonasBrothers@TractorsCIA] SET  READ_WRITE 
GO
