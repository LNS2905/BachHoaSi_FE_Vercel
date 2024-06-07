import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import { Dropdown, Empty, Input, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';

const productNames = [
    "Gấu Bông Capybara",
    "Gấu Bông Khủng Long",
    "Gấu Bông Kỳ Lân",
    "Gấu Bông Mèo Thần Tài",
    "Gấu Bông Stitch",
    "Gấu Bông Thỏ Cony",
    "Gấu Bông Totoro",
    "Gấu Bông We Bare Bears",
    "Gối Ôm Hình Trái Tim",
    "Gối Ôm Hình Chữ U",
];

const imageUrls = [
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmc-lp6cwov8rk0898",
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmc-lp6cwov8rk0898",
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmc-lp6cwov8rk0898",
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmc-lp6cwov8rk0898",
    "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmc-lp6cwov8rk0898",
];

const data = [];
for (let i = 1; i <= 50; i++) {
    const product = {
        id: `P${i.toString().padStart(3, '0')}`,
        name: productNames[Math.floor(Math.random() * productNames.length)],
        image: imageUrls[Math.floor(Math.random() * imageUrls.length)],
        quantity: Math.floor(Math.random() * 50) + 1,
        price: (Math.random() * 100).toFixed(2),
    };
    data.push({
        key: i.toString(),
        product,
    });
}

const OrdersTable = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (value) => {
        const searchQuery = value.toLowerCase();
        const filtered = data.filter((record) => {
            return Object.values(record.product).some((field) =>
                field.toString().toLowerCase().includes(searchQuery)
            );
        });
        setFilteredData(filtered);
    };

    const columns = [
        {
            title: 'ProductID',
            dataIndex: ['product', 'id'],
            key: 'product.id',
            width: '15%',
        },
        {
            title: 'Product Name',
            dataIndex: 'product',
            key: 'product',
            render: (product) => (
                <Space size="middle">
                    <img src={product.image} alt={product.name} width={40} />
                    <span>{product.name}</span>
                </Space>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: ['product', 'quantity'],
            key: 'product.quantity',
        },
        {
            title: 'Price',
            dataIndex: ['product', 'price'],
            key: 'product.price',
            render: (price) => `$${parseFloat(price).toFixed(2) || '0.00'}`,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Dropdown menu={{
                        items: [
                            { key: 'edit', label: 'Edit', icon: <EditOutlined />, onClick: () => console.log('Edit', record) },
                            { key: 'delete', label: 'Delete', icon: <DeleteOutlined />, danger: true, onClick: () => console.log('Delete', record) },
                        ]
                    }}>
                        <a onClick={(e) => e.preventDefault()}>More actions <DownOutlined /></a>
                    </Dropdown>
                </Space>
            ),
        },
    ];

    const [animate, setAnimate] = useState('');

    useEffect(() => {
        const animationDirection = sessionStorage.getItem('animationDirection');
        console.log(animationDirection);
        if (animationDirection) {
            setAnimate(animationDirection);
            sessionStorage.removeItem('animationDirection');
        }
    }, []);

    return (
        <div className={`animate__animated ${animate}`}>
            <>
                <Input.Search
                    placeholder="Tìm kiếm"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={handleSearch}
                    style={{ marginBottom: 16 }}
                />
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    locale={{
                        emptyText: <Empty description="Không tìm thấy dữ liệu" />,
                    }}
                    pagination={{
                        pageSize: 7,
                    }}
                />

            </>
        </div>
    );
};

export default OrdersTable;