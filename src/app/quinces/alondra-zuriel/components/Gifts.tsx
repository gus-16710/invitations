import { header } from "./Animations";
import { league, vibes } from "./Fonts";
import { motion } from "framer-motion";

export default function Gifts() {
  return (
    <div className="h-screen flex justify-center items-center flex-col relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/quinces/alondra/gifts.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/80 to-transparent"></div>

      <motion.h2
        className={`${vibes.className} text-5xl mb-5 z-10 text-zinc-100`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mesa de Regalos
      </motion.h2>

      <motion.p
        className={`${league.className} text-xl z-10 text-center mt-5 text-zinc-100 px-5 max-w-md px-10`}
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Mi mayor regalo será tu presencia, pero si deseas obsequiarme un detalle
        te invito a participar en la lluvia de sobres.
      </motion.p>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"        
        viewBox="0 0 1024 1024"
        fill="#ffffff"    
        version="1.1"
        className="z-10 mt-10"
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        <path
          d="M424.482 312.012c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8zM424.482 280.014c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8zM424.482 248.016c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8zM424.482 216.018c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8zM424.482 184.02c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8zM424.482 152.022c-4.414 0-8.078-3.578-8.078-8s3.5-8 7.922-8h0.156c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
          fill=""
        />
        <path
          d="M695.99 631.992c-4.422 0-8-3.578-8-8V87.22c-15.654-3.188-27.998-15.544-31.202-31.194H367.206c-3.188 15.648-15.546 28.006-31.194 31.194v536.772c0 4.422-3.578 8-8 8s-8-3.578-8-8V80.026c0-4.42 3.578-8 8-8 13.234 0 23.998-10.766 23.998-24 0-4.42 3.578-8 8-8h303.982c4.422 0 8 3.578 8 8 0 13.234 10.764 24 23.998 24a7.994 7.994 0 0 1 7.998 8v543.966c0 4.422-3.578 8-7.998 8z"
          fill=""
        />
        <path
          d="M727.988 615.994c-4.422 0-8-3.578-8-8V24.03H304.014v583.964c0 4.422-3.578 8-8 8s-8-3.578-8-8V16.03c0-4.42 3.578-8 8-8h431.974c4.422 0 8 3.578 8 8v591.964c0 4.422-3.578 8-8 8z"
          fill=""
        />
        <path
          d="M505.548 599.994v-15.998c46.434 0 86.448-42.92 86.448-63.996 0-21.07-40.014-63.996-86.448-63.996v-16c51.792 0 102.448 45.802 102.448 79.996 0 34.186-50.654 79.994-102.448 79.994z"
          fill=""
        />
        <path
          d="M588.684 480.002c-4.422 0-8-3.578-8-8a8.008 8.008 0 0 1 6.406-7.842c2.828-2.454 10.578-14.46 22.454-45.396 1.578-4.118 6.232-6.156 10.326-4.602a8.01 8.01 0 0 1 4.61 10.336c-21.296 55.504-30.374 55.504-35.796 55.504z"
          fill=""
        />
        <path
          d="M588.684 480.002h-19.608c-4.422 0-8-3.578-8-8 0-4.42 3.578-8 8-8h19.608c4.422 0 8 3.578 8 8 0 4.422-3.578 8-8 8zM616.994 626.32a8 8 0 0 1-7.466-5.124c-11.876-30.918-19.624-42.902-22.438-45.356a8.01 8.01 0 0 1-6.406-7.844c0-4.422 3.578-8 8-8 5.406 0 14.468 0 35.78 55.452 1.578 4.124-0.468 8.764-4.594 10.342a8.16 8.16 0 0 1-2.876 0.53z"
          fill=""
        />
        <path
          d="M588.684 575.996h-19.592c-4.422 0-8-3.578-8-8s3.578-8 8-8h19.592c4.422 0 8 3.578 8 8s-3.578 8-8 8z"
          fill=""
        />
        <path
          d="M512 663.99c-88.22 0-159.99-64.59-159.99-143.99 0-79.394 71.77-143.992 159.99-143.992 88.214 0 159.992 64.598 159.992 143.992 0 43.042-21.14 83.494-58.014 110.976-28.56 21.282-64.776 33.014-101.978 33.014z m0-271.982c-79.392 0-143.99 57.418-143.99 127.992s64.598 127.992 143.99 127.992c33.782 0 66.59-10.594 92.418-29.842 32.778-24.436 51.574-60.202 51.574-98.15 0-70.574-64.59-127.992-143.992-127.992z"
          fill=""
        />
        <path
          d="M489.15 600.712h-0.016c-31.31 0-55.176-9.858-70.942-29.28-30.85-38.044-18.552-98.526-18.014-101.08a8.012 8.012 0 0 1 7.11-6.32c3.664-0.29 6.788 1.704 8.124 4.936 0.554 1.36 1.062 2.446 1.516 3.312 2.39-8.304 13.766-34.35 62.192-34.35 8.024 0 16.804 0.734 26.11 2.18a8.004 8.004 0 0 1 2.484 14.992l-39.458 20.646c3.656 8.672 8.67 24.264 8.67 44.498 0 20.108-4.958 35.452-8.616 44.028l39.404 20.624a8.02 8.02 0 0 1 4.138 8.64 8.016 8.016 0 0 1-7.1 6.42c-5.484 0.52-10.672 0.754-15.602 0.754z m-75.378-110.328c-1.304 18.958-0.226 49.958 16.89 71.002 9.25 11.39 22.342 18.656 39.06 21.688l-15.742-8.234a7.988 7.988 0 0 1-4-4.968 7.954 7.954 0 0 1 0.898-6.312c0.086-0.14 10.046-16.936 10.046-43.308 0-26.436-10.008-43.74-10.11-43.912a8.02 8.02 0 0 1 3.164-11.172l21.352-11.17c-38.544 1.304-43.014 22.404-43.194 23.334a9.824 9.824 0 0 1-0.476 1.672c-0.812 1.976-5.32 11.86-14.5 11.86a12.228 12.228 0 0 1-3.388-0.48z"
          fill=""
        />
        <path
          d="M599.996 328.012c-4.422 0-8-3.578-8-8V128.024c0-4.422 3.578-8 8-8s8 3.578 8 8v191.988c0 4.422-3.578 8-8 8z"
          fill=""
        />
        <path
          d="M551.998 312.012h-79.994c-4.422 0-8-3.578-8-8s3.578-8 8-8h79.994c4.422 0 8 3.578 8 8s-3.578 8-8 8zM528 264.016h-31.998c-17.648 0-31.998-14.352-31.998-31.998 0-17.648 14.35-31.998 31.998-31.998H528c17.64 0 31.998 14.35 31.998 31.998 0 17.646-14.358 31.998-31.998 31.998z m-31.998-47.998c-8.82 0-16 7.18-16 16s7.18 15.998 16 15.998H528c8.828 0 16-7.178 16-15.998s-7.172-16-16-16h-31.998zM528 184.02h-31.998c-17.648 0-31.998-14.35-31.998-31.998 0-17.646 14.35-31.998 31.998-31.998H528c17.64 0 31.998 14.352 31.998 31.998 0 17.648-14.358 31.998-31.998 31.998z m-31.998-47.996c-8.82 0-16 7.178-16 15.998s7.18 16 16 16H528c8.828 0 16-7.18 16-16s-7.172-15.998-16-15.998h-31.998z"
          fill=""
        />
        <path
          d="M488.002 328.012a7.976 7.976 0 0 1-5.656-2.344l-15.998-16a7.996 7.996 0 1 1 11.31-11.31l16 15.998a8 8 0 0 1-5.656 13.656zM551.998 328.012a7.994 7.994 0 0 1-7.998-8v-31.998c0-4.422 3.578-8 7.998-8 4.422 0 8 3.578 8 8v31.998c0 4.422-3.578 8-8 8z"
          fill=""
        />
        <path
          d="M237.01 567.95a8 8 0 0 1-7.718-5.922L128 183.964a8.008 8.008 0 0 1 0.796-6.07 7.968 7.968 0 0 1 4.868-3.726 23.814 23.814 0 0 0 14.578-11.164 23.828 23.828 0 0 0 2.382-18.218 8.028 8.028 0 0 1 0.796-6.078 8.006 8.006 0 0 1 4.858-3.726l105.666-28.31c4.282-1.124 8.664 1.382 9.796 5.656a8 8 0 0 1-5.656 9.796L167.388 148.568a39.692 39.692 0 0 1-5.29 22.438 39.66 39.66 0 0 1-16.78 15.788l99.424 371.078a8.018 8.018 0 0 1-5.656 9.812 8.628 8.628 0 0 1-2.076 0.266z"
          fill=""
        />
        <path
          d="M199.606 551.936a8 8 0 0 1-7.718-5.922L80.536 130.438c-0.546-2.046-0.266-4.234 0.796-6.07s2.812-3.18 4.86-3.726l175.754-47.09c4.282-1.132 8.664 1.39 9.796 5.656a8 8 0 0 1-5.656 9.796l-168.03 45.02 109.284 407.834a8.018 8.018 0 0 1-5.656 9.812 8.67 8.67 0 0 1-2.078 0.266z"
          fill=""
        />
        <path
          d="M49.708 448.192a7.99 7.99 0 0 1-6.954-4.032 7.994 7.994 0 0 1 2.976-10.914l70.324-40.184a7.97 7.97 0 0 1 10.912 2.976 7.996 7.996 0 0 1-2.974 10.914l-70.324 40.186a7.922 7.922 0 0 1-3.96 1.054z"
          fill=""
        />
        <path
          d="M95.548 472.002a7.99 7.99 0 0 1-6.952-4.03 7.994 7.994 0 0 1 2.976-10.914l40.48-23.124c3.82-2.218 8.718-0.868 10.914 2.976a7.994 7.994 0 0 1-2.976 10.914l-40.482 23.124a7.922 7.922 0 0 1-3.96 1.054z"
          fill=""
        />
        <path
          d="M791.796 567.95c-0.688 0-1.376-0.094-2.078-0.266a8.02 8.02 0 0 1-5.656-9.812l99.448-371.078a39.66 39.66 0 0 1-16.78-15.788 39.636 39.636 0 0 1-5.282-22.438l-98.698-26.444a8 8 0 0 1-5.656-9.796 8.036 8.036 0 0 1 9.81-5.656l105.65 28.31a7.94 7.94 0 0 1 4.844 3.726c1.062 1.842 1.36 4.022 0.796 6.078a23.878 23.878 0 0 0 2.39 18.218 23.834 23.834 0 0 0 14.576 11.164 7.986 7.986 0 0 1 4.86 3.726c1.062 1.836 1.36 4.022 0.812 6.07l-101.304 378.062a8.028 8.028 0 0 1-7.732 5.924z"
          fill=""
        />
        <path
          d="M829.23 551.998c-0.688 0-1.374-0.094-2.06-0.266a8.006 8.006 0 0 1-5.672-9.796l109.276-407.912-168.022-45.022a8 8 0 0 1-5.656-9.796 8.038 8.038 0 0 1 9.81-5.656l175.74 47.09a8 8 0 0 1 5.656 9.796L836.964 546.06a8.028 8.028 0 0 1-7.734 5.938z"
          fill=""
        />
        <path
          d="M979.128 448.192c-1.36 0-2.718-0.336-3.968-1.054l-70.308-40.186a8 8 0 0 1-2.984-10.914 7.98 7.98 0 0 1 10.922-2.976l70.308 40.184a8 8 0 0 1-3.97 14.946z"
          fill=""
        />
        <path
          d="M933.288 472.002a7.912 7.912 0 0 1-3.966-1.054l-40.466-23.124a8 8 0 0 1-2.984-10.914 7.98 7.98 0 0 1 10.92-2.976l40.466 23.124a8 8 0 0 1 2.984 10.914 8.024 8.024 0 0 1-6.954 4.03z"
          fill=""
        />
        <path
          d="M967.972 1015.968c-4.422 0-8-3.578-8-8a7.994 7.994 0 0 1 8-7.998c22.062 0 39.998-17.938 39.998-39.998V512c0-11.21-4.078-24.654-11.172-36.888a8 8 0 1 1 13.844-8.03c8.594 14.812 13.326 30.764 13.326 44.918v447.972c0 30.874-25.122 55.996-55.996 55.996z"
          fill=""
        />
        <path
          d="M56.03 1015.968c-30.874 0-55.998-25.124-55.998-55.996V512c0-13.968 4.624-29.732 13.032-44.38a7.982 7.982 0 0 1 10.914-2.96 7.988 7.988 0 0 1 2.96 10.914C19.906 487.846 16.032 500.782 16.032 512v447.972c0 22.06 17.944 39.998 39.998 39.998a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.578 8-7.998 8z"
          fill=""
        />
        <path
          d="M511.992 791.982a7.954 7.954 0 0 1-4.28-1.25L15.704 478.346a7.99 7.99 0 0 1-2.46-11.038c2.376-3.734 7.32-4.86 11.04-2.46l492.008 312.388a7.982 7.982 0 0 1 2.46 11.03 7.988 7.988 0 0 1-6.76 3.716z"
          fill=""
        />
        <path
          d="M512.008 791.982a7.976 7.976 0 0 1-6.756-3.718 7.982 7.982 0 0 1 2.46-11.03L999.72 464.846c3.704-2.382 8.672-1.266 11.032 2.46a7.984 7.984 0 0 1-2.468 11.038L516.29 790.732a7.97 7.97 0 0 1-4.282 1.25z"
          fill=""
        />
        <path
          d="M967.972 967.972a7.996 7.996 0 0 1-4.25-1.218L631.838 758.782a8.014 8.014 0 0 1-2.532-11.03 8.03 8.03 0 0 1 11.03-2.532l331.886 207.97a8.016 8.016 0 0 1 2.532 11.032 7.994 7.994 0 0 1-6.782 3.75z"
          fill=""
        />
        <path
          d="M56.038 967.972a8.006 8.006 0 0 1-6.79-3.75 8.008 8.008 0 0 1 2.532-11.032l331.884-207.986a8.01 8.01 0 0 1 11.032 2.532 8.006 8.006 0 0 1-2.532 11.03L60.278 966.754a7.948 7.948 0 0 1-4.24 1.218z"
          fill=""
        />
        <path
          d="M967.972 1015.968H56.03c-4.422 0-8-3.578-8-8a7.994 7.994 0 0 1 8-7.998h911.944a8 8 0 1 1-0.002 15.998z"
          fill=""
        />
      </motion.svg>
    </div>
  );
}
