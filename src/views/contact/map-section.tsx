type Props = {};

const MapSection = (props: Props) => {
  return (
    <div>
      <iframe
        className="w-full"
        height={600}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24128.292239971973!2d-74.0060152!3d40.7127761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19d1455555%3A0xe222a8b403b3d204!2sNew+York%2C+USA!5e0!3m2!1sen!2s!4v1645551080342"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
