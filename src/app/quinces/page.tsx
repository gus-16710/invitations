"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Christening() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-br from-pink-500 to-orange-400 h-screen flex items-center justify-center flex-col">
      <Card className="w-80 mx-10">
        <CardHeader className="flex gap-3">
          <Image
            alt="fifteen"
            height={40}
            radius="sm"
            src="/img/quinces/fifteen.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Invitaciones</p>
            <p className="text-small text-default-500">Quince Años</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Listbox aria-label="Actions">
            <ListboxItem key="daniela" onClick={() => router.push("daniela")}>
              ⭐ Invitación Daniela
            </ListboxItem>
          </Listbox>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link href="/" color="foreground" size="sm">
            Regresar
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
