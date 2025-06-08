# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :directory

      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def directory_files_content
        target_path = File.join(directory, '**', '*')
        Dir[target_path].map{|f| File.read(f) unless File.directory?(f) }.join
      end

      def file_content
        local_file_name = file_name.slice((file_name.index('assets/')..-1))
        if File.exist?(local_file_name)
          File.read(local_file_name)
        else
          # If file doesn't exist, use the filename as the content
          local_file_name
        end
      end

      def file_contents
        is_directory? ? file_content : directory_files_content
      end

      def is_directory?
        directory.nil?
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: nil).digest!
    end

    def bust_css_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: 'assets/_sass').digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)