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
    <main className="bg-gradient-to-br from-green-400 to-blue-600 h-screen flex items-center justify-center flex-col">
      <Card className="w-80 mx-10">
        <CardHeader className="flex gap-3">
          <Image
            alt="christening"
            height={40}
            radius="sm"
            src="/img/bautizos/christening.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Invitaciones</p>
            <p className="text-small text-default-500">Bautizos</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Listbox aria-label="Actions">
            <ListboxItem key="annette" onClick={() => router.push("annette")}>
              ⭐ Annette
            </ListboxItem>
            <ListboxItem key="barbara" onClick={() => router.push("barbara")}>
              ⭐ Barbara
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
