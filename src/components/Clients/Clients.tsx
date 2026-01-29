'use client';

import React from 'react';
import Image from 'next/image';

interface Client {
    id: number;
    img: string;
}

const clients: Client[] = [
    { id: 1, img: "/assets/images/clients/smart.png" }
];

export default function Clients() {
    return (
        <section className="section-sm bg-light">
            <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    {clients.map((client, key) => (
                        <div className="col-md-3" key={key}>
                            <div className="client-images my-3 my-md-0">
                                <Image
                                    src={client.img}
                                    alt="logo-img"
                                    className="mx-auto img-fluid d-block"
                                    width={200}
                                    height={100}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
